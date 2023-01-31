<?php

namespace App\Entity;

use App\Repository\DevisFactureRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: DevisFactureRepository::class)]
class DevisFacture
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(nullable: true)]
    private array $society_infos = [];

    #[ORM\Column(nullable: true)]
    private array $article_infos = [];

    #[ORM\Column(nullable: true)]
    private ?int $total_price_HT = null;

    #[ORM\Column(nullable: true)]
    private ?int $total_price_TTC = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $type_of_payment = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $status_payment = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $updated_date = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $created_date = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSocietyInfos(): array
    {
        return $this->society_infos;
    }

    public function setSocietyInfos(?array $society_infos): self
    {
        $this->society_infos = $society_infos;

        return $this;
    }

    public function getArticleInfos(): array
    {
        return $this->article_infos;
    }

    public function setArticleInfos(?array $article_infos): self
    {
        $this->article_infos = $article_infos;

        return $this;
    }

    public function getTotalPriceHT(): ?int
    {
        return $this->total_price_HT;
    }

    public function setTotalPriceHT(?int $total_price_HT): self
    {
        $this->total_price_HT = $total_price_HT;

        return $this;
    }

    public function getTotalPriceTTC(): ?int
    {
        return $this->total_price_TTC;
    }

    public function setTotalPriceTTC(?int $total_price_TTC): self
    {
        $this->total_price_TTC = $total_price_TTC;

        return $this;
    }

    public function getTypeOfPayment(): ?string
    {
        return $this->type_of_payment;
    }

    public function setTypeOfPayment(?string $type_of_payment): self
    {
        $this->type_of_payment = $type_of_payment;

        return $this;
    }

    public function getStatusPayment(): ?string
    {
        return $this->status_payment;
    }

    public function setStatusPayment(?string $status_payment): self
    {
        $this->status_payment = $status_payment;

        return $this;
    }

    public function getUpdatedDate(): ?\DateTimeInterface
    {
        return $this->updated_date;
    }

    public function setUpdatedDate(?\DateTimeInterface $updated_date): self
    {
        $this->updated_date = $updated_date;

        return $this;
    }

    public function getCreatedDate(): ?\DateTimeInterface
    {
        return $this->created_date;
    }

    public function setCreatedDate(?\DateTimeInterface $created_date): self
    {
        $this->created_date = $created_date;

        return $this;
    }
}
