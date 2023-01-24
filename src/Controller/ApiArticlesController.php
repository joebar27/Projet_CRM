<?php

namespace App\Controller;

use App\Entity\Articles;
use App\Repository\ArticlesRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bridge\Doctrine\ManagerRegistry as DoctrineManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ApiArticlesController extends AbstractController
{
    #[Route('/api/allarticles', name: 'api_all_articles')]
    public function getAllArticles(ArticlesRepository $articlesRepository): Response
    {
        // récupération de tous les articles en BDD
        $articles = $articlesRepository->findAll();
        // affichage des articles:
        return $this->json([$articles,'status' => 'success', 'message' => 'success'], Response::HTTP_OK, );
    }

    #[Route('/api/article', name: 'api_article')]
    public function getArticle(Request $request, ArticlesRepository $articlesRepository): Response
    {
        $formData = $request->getContent();
        $data = json_decode($formData, true);
        // récupération d'un article en BDD
        $article = $articlesRepository->findOneBy(['id' => $data['id']]);
        // affichage des articles:
        if (!$article) {
            return $this->json(['status' => 'article not found', 'message' => 'L\'article ' . $data['id'] . ' n\'a pas été trouvé'], Response::HTTP_UNAUTHORIZED, );
        }
        if ($article && $article->getDeletedDate() === null) {
            return $this->json([$article,'status' => 'article found success', 'message' => 'success'], Response::HTTP_OK, );
        }

        if ($article && $article->getDeletedDate() !== null) {
            return $this->json([$article,'status' => 'article deleted', 'message' => 'L\'article a été supprimé.'], Response::HTTP_BAD_REQUEST, );
        }
    }

    #[Route('/api/addarticle', name: 'api_add_article')]
    public function addArticle(Request $request, ArticlesRepository $articlesRepository, ManagerRegistry $doctrine): Response
    {
        $formData = $request->getContent();
        $data = json_decode($formData, true);
        // récupération d'un article en BDD
        $article = $articlesRepository->findOneBy(['reference' => $data['reference']]);
        // Si l'article existe mais avais été supprimé:
        if ($article && $article->getDeletedDate() !== null) {
            $article->setName($data['name']);
            $article->setDescription($data['description']);
            $article->setAvailability($data['availability']);
            $article->setPriceHT($data['priceHT']);
            $article->setTVA($data['TVA']);
            $article->setQuantity($data['quantity']);
            $article->setReference($data['reference']);
            $article->setUpdatedDate(new \DateTime());
            $article->setDeletedDate(null);

            $em = $doctrine->getManager();
            $em->persist($article);
            $em->flush();

            return $this->json([$article,'status' => 'article update successfully', 'message' => 'Mise à jour avec succes.'], Response::HTTP_OK, );
        }
        // Si l'article n'existe pas:
        if (!$article) {
            $newArticle = new Articles();
            $newArticle->setName($data['name']);
            $newArticle->setReference($data['reference']);
            $newArticle->setAvailability($data['availability']);
            $newArticle->setPriceHT($data['priceHT']);
            $newArticle->setQuantity($data['quantity']);
            $newArticle->setDescription($data['description']);
            $newArticle->setTVA($data['TVA']);
            $newArticle->setCreatedDate(new \DateTime());

            $em = $doctrine->getManager();
            $em->persist($newArticle);
            $em->flush();

            return $this->json([$newArticle,'status' => 'article create successfully', 'message' => 'L\'article a été créé avec succes'], Response::HTTP_OK, );
        } else {
            return $this->json([$article,'status' => 'article creation error', 'message' => 'L\'article n\'a pas été créé.'], Response::HTTP_BAD_REQUEST, );
        }
    }

    #[Route('/api/updatearticle', name: 'api_update_article')]
    public function updateArticle(Request $request, ArticlesRepository $articlesRepository, ManagerRegistry $doctrine): Response
    {
        $formData = $request->getContent();
        $data = json_decode($formData, true);
        // récupération de l'article en BDD par sa référence:
        $article = $articlesRepository->findOneBy(['reference' => $data['reference']]);
        // Si l'article n'existe pas:
        if (!$article) {
            return $this->json([$article,'status' => 'Article not found', 'message' => 'L\'article ' . $data['reference'] . ' n\'a pas été trouvé'], Response::HTTP_UNAUTHORIZED, );
        }
        // Si l'article existe et n'a pas été supprimé:
        if ($article && $article->getDeletedDate() === null) {
            $article->setName($data['name']);
            $article->setDescription($data['description']);
            $article->setAvailability($data['availability']);
            $article->setPriceHT($data['priceHT']);
            $article->setTVA($data['TVA']);
            $article->setQuantity($data['quantity']);
            $article->setReference($data['reference']);
            $article->setUpdatedDate(new \DateTime());

            $em = $doctrine->getManager();
            $em->persist($article);
            $em->flush();

            return $this->json([$article,'status' => 'article update successfully', 'message' => 'Mise à jour avec succes.'], Response::HTTP_OK, );
        }
        // Si l'article existe mais a été supprimé:
        if ($article && $article->getDeletedDate() !== null) {
            return $this->json([$article,'status' => 'article deleted', 'message' => 'L\'article a été supprimé.'], Response::HTTP_BAD_REQUEST, );
        }
        
        return $this->json([$article,'status' => 'article updation error', 'message' => 'L\'article n\'a pas pu être mis à jour.'], Response::HTTP_BAD_REQUEST, );
    }

    #[Route('/api/deletearticle', name: 'api_delete_article')]
    public function deleteArticle(Request $request, ArticlesRepository $articlesRepository, ManagerRegistry $doctrine): Response
    {
        $formData = $request->getContent();
        $data = json_decode($formData, true);
        // récupération de l'article en BDD par sa référence:
        $article = $articlesRepository->findOneBy(['reference' => $data['reference']]);
        // Si l'article n'existe pas:
        if (!$article) {
            return $this->json([$article,'status' => 'article not found', 'message' => 'L\'article ' . $data['reference'] . ' n\'a pas été trouvé'], Response::HTTP_UNAUTHORIZED, );
        }
        // Si l'article existe et a déjà été supprimé:
        if ($article->getDeletedDate() !== null) {
            return $this->json([$article,'status' => 'article already deleted', 'message' => 'L\'article a déjà été supprimé.'], Response::HTTP_BAD_REQUEST, );
        }
        // Si l'article existe et n'a pas été supprimé:
        if ($article && $article->getDeletedDate() === null) {
            $article->setDeletedDate(new \DateTime());

            $em = $doctrine->getManager();
            $em->persist($article);
            $em->flush();

            return $this->json([$article,'status' => 'article delete successfully', 'message' => 'Suppression de l\'article effectué avec succes.'], Response::HTTP_OK, );
        }

        return $this->json([$article,'status' => 'article deletion error', 'message' => 'L\'article n\'a pas été mis à jour.'], Response::HTTP_BAD_REQUEST, );
    }
}
