<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class ApiLoginController extends AbstractController
{
    

    public function __construct(private UserPasswordHasherInterface $passwordHasher)
    {

    }

    #[Route('/api/login', name: 'app_api_login')]
    public function index(UserPasswordHasherInterface $passwordHasher, Request $request, UserRepository $userRepository): Response
    {
        $formData = $request->getContent();
        $data = json_decode($formData, true);
        $user = $userRepository->findOneBy(['email' => $data['email']]);
        
        if ($user) {
            $password = $data['password'];
            if($passwordHasher->isPasswordValid($user, $password)){
                return $this->json(['status' => 'success', 'message' => 'Login successful'], Response::HTTP_OK,);
            }
            else {
                return $this->json(['status' => 'error', 'message' => 'Invalid credentials'], Response::HTTP_UNAUTHORIZED,);
            }
        }else {
            return $this->json(['status' => 'error', 'message' => 'Invalid credentials'], Response::HTTP_UNAUTHORIZED,);
        }
    }

    // #[Route('/api/register', name: 'app_api_register')]

    // public function index(UserPasswordHasherInterface $passwordHasher, Request $request, UserRepository $userRepository): Response
    // {
    //     $formData = $request->getContent();
    //     $data = json_decode($formData, true);
    //     $user = $userRepository->findOneBy(['email' => $data['email']]);
        
    //     if (!$user) {
    //         $password = $data['password'];
    //         $password = $passwordHasher->hashPassword($user, $password);
    //         if($password === $user->getPassword()){
    //             return json_encode([ $user, 'status' => 'success', 'message' => 'Login successful', Response::HTTP_OK,]);
    //         }
    //         else {
    //             return json_encode(['status' => 'error', 'message' => 'Invalid credentials', Response::HTTP_UNAUTHORIZED,]);
    //         }
    //     }else {
    //         return json_encode(['status' => 'error', 'message' => 'Invalid credentials', Response::HTTP_UNAUTHORIZED,]);
    //     }
    // }
}
