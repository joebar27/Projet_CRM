<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class RegisterController extends AbstractController
{
    #[Route('api/register', name: 'api_register')]
    public function register(UserPasswordHasherInterface $passwordHasher, Request $request, UserRepository $userRepository, ManagerRegistry $doctrine): Response
    {
        $formData = $request->getContent();
        $data = json_decode($formData, true);
        $user = $userRepository->findOneBy(['email' => $data['email']]);
        // dd($user);
        if (!$user) {
            // dd("ici");
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
        // dd("la");
    }

    #[Route('api/userModify/{id}', name: 'api_usermodify')]
    public function updateUser(UserPasswordHasherInterface $passwordHasher, Request $request, UserRepository $userRepository, ManagerRegistry $doctrine): Response
    {
        /*
        $userdetails= [
            'id' => $user->getId(),
            'email' => $user->getEmail(),
            'roles' => $user->getRoles(),
            'first_name' => $user->getFirstName(),
            'last_name' => $user->getLastName(),
            'phone' => $user->getPhoneNumber(),
            'address' => $user->getAddress(),
            'city' => $user->getCity(),
            'zip_code' => $user->getZipCode(),
        ];
        */
        $formData = $request->getContent();
        $data = json_decode($formData, true);
        $user = $userRepository->findOneBy(['id' => $data['id']]);

        if ($user) {
            $user->setEmail($data['email']);
            $user->setRoles($data['role']);
            $user->setFirstName($data['first_name']);
            $user->setLastName($data['last_name']);
            $user->setAddress($data['address']);
            $user->setCity($data['city']);
            $user->setZipCode($data['zip_code']);
            $user->setPhoneNumber($data['phone']);

            if ($data['password'] == $data['password_confirm']) {
                $password = $data['password'];
                $password = $passwordHasher->hashPassword($user, $password);
                $user->setPassword($password);
            } else {
                return $this->json(['status' => 'Password not match', 'message' => 'Le mot de passe ne correspond pas'], Response::HTTP_UNAUTHORIZED, );
            }

            $em = $doctrine->getManager();
            $em->persist($user);
            $em->flush();

            return $this->json([$user,'status' => 'success', 'message' => 'success'], Response::HTTP_OK, );
        } else {
            return $this->json([$user, 'status' => 'User not exist', 'message' => 'L\'utilisateur n\'existe pas'], Response::HTTP_UNAUTHORIZED, );
        }
    }
}
