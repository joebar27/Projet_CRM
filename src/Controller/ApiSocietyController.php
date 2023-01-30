<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ApiSocietyController extends AbstractController
{
    #[Route('/api/society', name: 'app_api_society')]
    public function index(): Response
    {
        return $this->render('api_society/index.html.twig', [
            'controller_name' => 'ApiSocietyController',
        ]);
    }
}
