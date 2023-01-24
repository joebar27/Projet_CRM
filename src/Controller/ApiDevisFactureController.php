<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ApiDevisFactureController extends AbstractController
{
    #[Route('/api/devis/facture', name: 'app_api_devis_facture')]
    public function index(): Response
    {
        return $this->render('api_devis_facture/index.html.twig', [
            'controller_name' => 'ApiDevisFactureController',
        ]);
    }
}
