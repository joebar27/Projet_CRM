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
    public function addSociety(SocietyRepository $societyRepository, Request $request, ManagerRegistry $doctrine): Response
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

    #[Route('/api/updatesociety', name: 'api_update_society')]
    public function updateSociety(Request $request, SocietyRepository $societyRepository, ManagerRegistry $doctrine): Response
    {
        $formData = $request->getContent();
        $data = json_decode($formData, true);
        // récupération de l'article en BDD par sa référence:
        $society = $societyRepository->findOneBy(['Name' => $data['name']]);

        // Si la societé n'existe pas:
        if (!$society) {
            return $this->json([$society,'status' => 'society not found', 'message' => 'La societé ' . $data['name'] . ' n\'a pas été trouvé'], Response::HTTP_UNAUTHORIZED, );
        }
        // Si la societé existe et n'a pas été supprimé:
        if ($society->getDeletedDate() === null) {
            $society->setName($data['name']);
            $society->setSocialRaison($data['social_raison']);
            $society->setRCS($data['rcs']);
            $society->setSIRET($data['siret']);
            $society->setAddress($data['address']);
            $society->setCity($data['city']);
            $society->setZipCode($data['zip_code']);
            $society->setPhone($data['phone']);
            $society->setEmail($data['email']);
            $society->setUpdatedDate(new \DateTime());

            $em = $doctrine->getManager();
            $em->persist($society);
            $em->flush();

            return $this->json([$society,'status' => 'society update successfully', 'message' => 'Mise à jour avec succes.'], Response::HTTP_OK, );
        }
        // Si la societé existe mais a été supprimé:
        if ($society->getDeletedDate() !== null) {
            return $this->json([$society,'status' => 'society deleted', 'message' => 'La societé a déjà été supprimé.'], Response::HTTP_BAD_REQUEST, );
        }
        
        return $this->json([$society,'status' => 'society updation error', 'message' => 'La societé n\'a pas pu être mis à jour.'], Response::HTTP_BAD_REQUEST, );
    }
    
    #[Route('/api/deletesociety', name: 'api_delete_society')]
    public function deleteSociety(SocietyRepository $societyRepository, Request $request, ManagerRegistry $doctrine): Response
    {
        // Ajout d'une societé en BDD :

        $formData = $request->getContent();
        $data = json_decode($formData, true);

        // récupération de la société en BDD par son nom :
        $society = $societyRepository->findOneBy(['Name' => $data['name']]);

        // Si la socièté existe pas :
        if (!$society) {
            return $this->json([$society,'status' => 'society not found', 'message' => 'La socièté n\'a pas été trouvé.'], Response::HTTP_BAD_REQUEST, );
        }
        // Si la socièté existe et a déjà été supprimé:
        if ($society->getDeletedDate() !== null) {
            return $this->json([$society,'status' => 'society already deleted', 'message' => 'La société a déjà été supprimé.'], Response::HTTP_BAD_REQUEST, );
        }
        // Si la société existe et n'a pas déjà été supprimé:
        if ($society->getDeletedDate() !== null) {
            $society->setDeletedDate(new \DateTime());

            $em = $doctrine->getManager();
            $em->persist($society);
            $em->flush();

            return $this->json([$society,'status' => 'society delete successfully', 'message' => 'La socièté a été supprimé avec succes'], Response::HTTP_OK, );
        } else {
            return $this->json([$society,'status' => 'society deletion error', 'message' => 'La socièté n\'a pas été supprimé.'], Response::HTTP_BAD_REQUEST, );
        }
    }
}
