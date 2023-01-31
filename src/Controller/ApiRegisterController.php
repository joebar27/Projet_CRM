<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class ApiRegisterController extends AbstractController
{
    #[Route('/api/register', name: 'app_api_register')]
    public function index(UserPasswordHasherInterface $passwordHasher, Request $request, UserRepository $userRepository, ManagerRegistry $doctrine): Response
    {
        // return $this->json(['status' => 'error', 'message' => 'error'], Response::HTTP_BAD_REQUEST );
        $formData = $request->getContent();
        $data = json_decode($formData, true);
        $user = $userRepository->findOneBy(['email' => $data['email']]);
        if (!$user) {
            // dump("ici");
            $newUser = new User();
            $newUser->setEmail($data['email']);
            $newUser->setRoles($data['role']);
            $newUser->setFirstName($data['first_name']);
            $newUser->setLastName($data['last_name']);
            $newUser->setAddress($data['address']);
            $newUser->setCity($data['city']);
            $newUser->setZipCode($data['zip_code']);
            $newUser->setPhoneNumber($data['phone']);

            if ($data['password'] == $data['password_confirm']) {
                $password = $data['password'];
                $password = $passwordHasher->hashPassword($newUser, $password);
                $newUser->setPassword($password);
            } else {
                return $this->json(['status' => 'Password not match', 'message' => 'Le mot de passe ne correspond pas'], Response::HTTP_UNAUTHORIZED, );
            }

            $em = $doctrine->getManager();
            $em->persist($newUser);
            $em->flush();

            return $this->json([$newUser,'status' => 'success', 'message' => 'success'], Response::HTTP_OK, );
        } else {
            return $this->json([$user, 'status' => 'User exist', 'message' => 'L\'utilisateur existe deja'], Response::HTTP_UNAUTHORIZED, );
        }
    }

}
