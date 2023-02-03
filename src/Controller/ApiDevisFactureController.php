<?php

namespace App\Controller;

use App\Entity\DevisFacture;
use Doctrine\Persistence\ManagerRegistry;
use App\Repository\DevisFactureRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ApiDevisFactureController extends AbstractController
{
    #[Route('/api/getalldevisfacture', name: 'api_all_devis_facture')]
    public function getAll(DevisFactureRepository $devisFactureRepository): Response
    {
        // récupération de tous les devis en BDD :

        $all = $devisFactureRepository->findAll();

        if (!$all) {
            return $this->json(['status' => 'devis not found', 'message' => 'Aucun devis n\'a été trouvé'], Response::HTTP_UNAUTHORIZED, );
        }

        if ($all) {
            return $this->json([$all,'status' => 'devis found success', 'message' => 'devis trouvé avec succes'], Response::HTTP_OK, );
        }
    }

    #[Route('/api/devis', name: 'api_devis')]
    public function getAllDevis(DevisFactureRepository $devisFactureRepository): Response
    {
        // récupération de tous les devis en BDD :

        $devis = $devisFactureRepository->findBy( ['status_payment' => 'devis'] );

        if (!$devis) {
            return $this->json(['status' => 'devis not found', 'message' => 'Aucun devis n\'a été trouvé'], Response::HTTP_UNAUTHORIZED, );
        }

        if ($devis) {
            return $this->json([$devis,'status' => 'devis found success', 'message' => 'devis trouvé avec succes'], Response::HTTP_OK, );
        }
    }

    #[Route('/api/facture', name: 'api_facture')]
    public function getAllFacture(DevisFactureRepository $devisFactureRepository): Response
    {
        // récupération de toutes les factures en BDD :

        $facture = $devisFactureRepository->findBy( ['status_payment' => 'facture'] );
        
        if (!$facture) {
            return $this->json(['status' => 'facture not found', 'message' => 'Aucune facture n\'a été trouvé'], Response::HTTP_UNAUTHORIZED, );
        }
    
        if ($facture) {
            return $this->json([$facture,'status' => 'facture found success', 'message' => 'Facture trouvé avec succes'], Response::HTTP_OK, );
        }
    }

    #[Route('/api/adddevis', name: 'api_add_devis')]
    public function addDevis(Request $request, ManagerRegistry $doctrine): Response
    {
        // Ajout d'un devis en BDD :

        $formData = $request->getContent();
        $data = json_decode($formData, true);
        
        $newDevis = new DevisFacture();
        $newDevis->setSocietyInfos($data['society_infos']);
        $newDevis->setArticleInfos($data['articles_infos']);
        $newDevis->setTotalPriceHT($data['total_price_ht']);
        $newDevis->setTotalPriceTTC($data['total_price_ttc']);
        $newDevis->setStatusPayment('devis');
        $newDevis->setCreatedDate(new \DateTime());

        $em = $doctrine->getManager();
        $em->persist($newDevis);
        $em->flush();

        return $this->json([$newDevis,'status' => 'devis creation successfully', 'message' => 'Votre devis a bien été créé'], Response::HTTP_OK, );
        
    }

    #[Route('/api/devispayed', name: 'api_devis_payed')]
    public function quotePayed(Request $request, ManagerRegistry $doctrine, DevisFactureRepository $devisFactureRepository): Response
    {
        $formData = $request->getContent();
        $data = json_decode($formData, true);
        // récupération du devis en BDD:
        $devis = $devisFactureRepository->findOneBy(['id' => $data['id']]);

        if (!$devis) {
            return $this->json(['status' => 'devis not found', 'message' => 'Le devis n\'a pas été trouvé'], Response::HTTP_UNAUTHORIZED, );
        }
        if ($devis->getTypeOfPayment() !== null) {
            return $this->json(['status' => 'devis not found', 'message' => 'Le devis a déja été payé'], Response::HTTP_UNAUTHORIZED, );
        }
        if ($devis->getTypeOfPayment() === null) {
            $devis->setTypeOfPayment('stripe');
            $devis->setStatusPayment('facture');
            $devis->setUpdatedDate(new \DateTime());

            $em = $doctrine->getManager();
            $em->persist($devis);
            $em->flush();

            return $this->json([$devis,'status' => 'devis payed successfully', 'message' => 'Votre devis a bien été payé'], Response::HTTP_OK, );
        }
    }
}
