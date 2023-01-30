<?php

namespace App\Controller;

use App\Repository\SocietyRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;

class ApiSocietyController extends AbstractController
{
    #[Route('/api/societies', name: 'api_societies')]
    public function getAllSocieties(SocietyRepository $societyRepository): Response
    {
        // récupération de toutes les societés en BDD
        $society = $societyRepository->findAll();

        return $this->json([$society,'status' => 'success', 'message' => 'success'], Response::HTTP_OK, );
    }

    #[Route('/api/addsociety', name: 'api_add_society')]
    public function addSociety(SocietyRepository $societyRepository, Request $request, ): Response
    {
        // Ajout d'une societé en BDD :
        $formData = $request->getContent();
        $data = json_decode($formData, true);
        // récupération d'un article en BDD
        $society = $societyRepository->findOneBy(['id' => $data['id']]);
        // affichage des society:
        return $this->json([$society,'status' => 'success', 'message' => 'success'], Response::HTTP_OK, );
    }
}
