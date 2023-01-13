<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class RegisterController extends AbstractController
{
    #[Route('/register', name: 'app_register')]
    public function index(Request $request, UserRepository $userRepository): Response
    {
        $formData = $request->getContent();
        $data = json_decode($formData, true);
        $user = $userRepository->findOneBy(['id' => $data['id']]);
        /* $userdetails= [
        'id' => $user->getId(),
        'email' => $user->getEmail(),
        'roles' => $user->getRoles(),
        'first_name' => $user->getFirstName(),
        'last_name' => $user->getLastName(),
        'phone' => $user->getPhoneNumber(),
        'address' => $user->getAddress(),
        'city' => $user->getCity(),
        'zip_code' => $user->getZipCode(),
    ]; */
    return $this->json( ['status' => 'success', 'message' => 'Login successful'], Response::HTTP_OK,);
    }
}
