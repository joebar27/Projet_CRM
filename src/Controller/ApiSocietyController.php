<?php

namespace App\Controller;

use App\Entity\Society;
use App\Repository\SocietyRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

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
    public function addSociety(SocietyRepository $societyRepository, Request $request, ManagerRegistry $doctrine ): Response
    {
        // Ajout d'une societé en BDD :
        
        $formData = $request->getContent();
        $data = json_decode($formData, true);

        // Si la socièté existe déjà :
        $society = $societyRepository->findBy(['Name' => $data['name']]);
        if ($society) {
            return $this->json([$society,'status' => 'society exist', 'message' => 'La socièté existe déjà.'], Response::HTTP_BAD_REQUEST, );
        }
        // Si la socièté n'existe pas:
        if (!$society) {
            $newsociety = new Society();
            $newsociety->setName($data['name']);
            $newsociety->setSocialRaison($data['social_raison']);
            $newsociety->setRCS($data['rcs']);
            $newsociety->setSIRET($data['siret']);
            $newsociety->setAddress($data['address']);
            $newsociety->setCity($data['city']);
            $newsociety->setZipCode($data['zip_code']);
            $newsociety->setPhone($data['phone']);
            $newsociety->setEmail($data['email']);
            $newsociety->setCreatedDate(new \DateTime());

            $em = $doctrine->getManager();
            $em->persist($newsociety);
            $em->flush();

            return $this->json([$newsociety,'status' => 'society create successfully', 'message' => 'La socièté a été créé avec succes'], Response::HTTP_OK, );
        } else {
            return $this->json([$society,'status' => 'society creation error', 'message' => 'La socièté n\'a pas été créé.'], Response::HTTP_BAD_REQUEST, );
        }
    }
}
