<?php

namespace App\Controller;

use DateTime;
use App\Entity\User;
use App\Service\SendMail;
use App\Service\RandomString;
use App\Repository\UserRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class ApiRegisterController extends AbstractController
{

    public function __construct(private UserPasswordHasherInterface $passwordHasher)
    {
    }
    #[Route('/api/register', name: 'app_api_register')]
    public function index(Request $request, UserRepository $userRepository, ManagerRegistry $doctrine, SendMail $sendMail, RandomString $randomString): Response
    {
        $formData = $request->getContent();
        $data = json_decode($formData, true);
        $user = $userRepository->findOneBy(['email' => $data['email']]);

        if (!$user) {
            $newUser = new User();
            $newUser->setEmail($data['email']);
            $newUser->setRoles(['ROLE_ADMIN']);
            $newUser->setFirstName($data['first_name']);
            $newUser->setLastName($data['last_name']);
            $newUser->setAddress($data['address']);
            $newUser->setCity($data['city']);
            $newUser->setZipCode($data['zip_code']);
            $newUser->setPhoneNumber($data['phone_number']);
            $newUser->setCreatedAt(new \DateTimeImmutable());

            $em = $doctrine->getManager();
            $em->persist($newUser);
            $em->flush();
            
            $user = $userRepository->findOneBy(['email' => $data['email']]);
            $token = $randomString->randomString(9);
            $user->setToken($token);
            $user->setDateToken(new \DateTimeImmutable());
            $em->persist($user);
            $em->flush();
            $sendMail->sendMail($user, $token);
            

            return $this->json([$newUser,'status' => 'success', 'message' => 'success'], Response::HTTP_OK, );
        }

        if ($user) {
            return $this->json([$user, 'status' => 'User exist', 'message' => 'L\'utilisateur existe deja'], Response::HTTP_UNAUTHORIZED, );
        } else {
            return $this->json(['status' => 'error', 'message' => 'error'], Response::HTTP_UNAUTHORIZED, );
        }
    }

    #[Route('/api/register/confirm/{token}', name: 'app_api_register_confirm')]
    public function confirm($token, Request $request, UserRepository $userRepository, ManagerRegistry $doctrine): Response
    {
        $user = $userRepository->findOneBy(['token' => $token]);
        $data = json_decode($request->getContent(), true);

        if ($user) {
            $dateToday = new \DateTime('now');
            $dateToken = $user->getDateToken();
            $dateVerif = $dateToken->setDate(
                $dateToken->format('Y'),
                $dateToken->format('m'),
                $dateToken->format('d') + 7
            );

            if ($dateToday > $dateVerif) {
                $user->setToken(null);
                $user->setDateToken(null);

                $em = $doctrine->getManager();
                $em->persist($user);
                $em->flush();
                return $this->json(['status' => 'error', 'message' => 'erreur token expiré veuillez contacter un administrateur'], Response::HTTP_BAD_REQUEST);
            }

            $password = $data['password'];
            $confirmPassword = $data['confirm_password'];

            if ($password == $confirmPassword) {
                $password = $this->passwordHasher->hashPassword($user, $password);
                $user->setPassword($password);
            } else {
                return $this->json(['status' => 'error', 'message' => 'Erreur mot de passe non identique'], Response::HTTP_BAD_REQUEST);
            }

            $user->setToken(null);
            $user->setDateToken(null);
            $user->setVerified(true);
            $user->setDateVerif(new \DateTimeImmutable());

            $em = $doctrine->getManager();
            $em->persist($user);
            $em->flush();

            return $this->json(['status' => 'success', 'message' => 'success'], Response::HTTP_OK, );
        } else {
            return $this->json(['status' => 'error', 'message' => 'error'], Response::HTTP_UNAUTHORIZED, );
        }
}

}