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
    #[Route('/api/allarticles', name: 'api_allarticles')]
    public function getAllArticles(ArticlesRepository $articlesRepository,): Response
    {
        // récupération de tous les articles en BDD
        $articles = $articlesRepository->findAll();
        // affichage des articles:
        return $this->json([$articles,'status' => 'success', 'message' => 'success'], Response::HTTP_OK, );

    }

    #[Route('/api/article', name: 'api_article')]
    public function getArticle(Request $request, ArticlesRepository $articlesRepository,): Response
    {
        $formData = $request->getContent();
        $data = json_decode($formData, true);
        // récupération d'un article en BDD
        $article = $articlesRepository->findOneBy(['id' => $data['id']]);
        // affichage des articles:
        if (!$article) {
            return $this->json(['status' => 'Article not found', 'message' => 'L\'article ' . $data['id'] . ' n\'a pas été trouvé'], Response::HTTP_UNAUTHORIZED, );
        }else{
            return $this->json([$article,'status' => 'success', 'message' => 'success'], Response::HTTP_OK, );
        }

    }

    #[Route('/api/addarticle', name: 'api_add_article')]
    public function addArticle(Request $request, ArticlesRepository $articlesRepository, ManagerRegistry $doctrine): Response
    {
        $formData = $request->getContent();
        $data = json_decode($formData, true);
        // récupération d'un article en BDD
        $article = $articlesRepository->findOneBy(['reference' => $data['reference']]);
        // affichage des articles:
        if (!$article) {
            // dd($data);
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

            return $this->json([$newArticle,'status' => 'success', 'message' => 'success'], Response::HTTP_OK, );
        } else {
            return $this->json([$article,'status' => 'Article error', 'message' => 'L\'article n\'a pas été créé.'], Response::HTTP_BAD_REQUEST, );
        }
    }

    #[Route('/api/updatearticle', name: 'api_update_article')]
    public function updateArticle(Request $request, ArticlesRepository $articlesRepository, ManagerRegistry $doctrine): Response
    {
        $formData = $request->getContent();
        $data = json_decode($formData, true);
        // récupération d'un article en BDD
        $article = $articlesRepository->findOneBy(['reference' => $data['reference']]);
        // Si l'article n'existe pas:
        if (!$article) {
            return $this->json([$article,'status' => 'Article not found', 'message' => 'L\'article ' . $data['reference'] . ' n\'a pas été trouvé'], Response::HTTP_UNAUTHORIZED, );
        }
        if ($article && $article->getDeletedDate() !== null) {
            dd($article);
            $article->setName($data['name']);
            $article->setReference($data['reference']);
            $article->setAvailability($data['availability']);
            $article->setPriceHT($data['priceHT']);
            $article->setQuantity($data['quantity']);
            $article->setDescription($data['description']);
            $article->setTVA($data['TVA']);
            $article->setUpdatedDate(new \DateTime());
            
            $em = $doctrine->getManager();
            $em->persist($article);
            $em->flush();

            return $this->json([$article,'status' => 'updated success', 'message' => 'Mise à jour avec succes.'], Response::HTTP_OK, );
        } else {
            return $this->json([$article,'status' => 'Updated article error', 'message' => 'L\'article n\'a pas été mis à jour.'], Response::HTTP_BAD_REQUEST, );
        }
    }

    #[Route('/api/deletearticle', name: 'api_delete_article')]
    public function deleteArticle(Request $request, ArticlesRepository $articlesRepository, ManagerRegistry $doctrine): Response
    {
        $formData = $request->getContent();
        $data = json_decode($formData, true);
        // récupération d'un article en BDD
        $article = $articlesRepository->findOneBy(['reference' => $data['reference']]);
        // Si l'article n'existe pas:
        if (!$article) {
            return $this->json([$article,'status' => 'Article not found', 'message' => 'L\'article ' . $data['reference'] . ' n\'a pas été trouvé'], Response::HTTP_UNAUTHORIZED, );
        }
        if ($article && $article->getDeletedDate() === null) {
            dd($article);
            $article->setName($data['name']);
            $article->setReference($data['reference']);
            $article->setAvailability($data['availability']);
            $article->setPriceHT($data['priceHT']);
            $article->setQuantity($data['quantity']);
            $article->setDescription($data['description']);
            $article->setTVA($data['TVA']);
            $article->setUpdatedDate(new \DateTime());
            
            $em = $doctrine->getManager();
            $em->persist($article);
            $em->flush();

            return $this->json([$article,'status' => 'updated success', 'message' => 'Mise à jour avec succes.'], Response::HTTP_OK, );
        } else {
            return $this->json([$article,'status' => 'Updated article error', 'message' => 'L\'article n\'a pas été mis à jour.'], Response::HTTP_BAD_REQUEST, );
        }
    }
}
