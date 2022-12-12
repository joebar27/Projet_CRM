<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UserRepository::class)]
class User
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $First_name = null;

    #[ORM\Column(length: 255)]
    private ?string $Last_name = null;

    #[ORM\Column(length: 255)]
    private ?string $Address = null;

    #[ORM\Column(length: 255)]
    private ?string $City = null;

    #[ORM\Column(length: 255)]
    private ?string $ZipCode = null;

    #[ORM\Column(length: 255)]
    private ?string $Mail = null;

    #[ORM\Column(length: 255)]
    private ?string $Phone = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $Updated_date = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $Created_date = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $Deleted_date = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstName(): ?string
    {
        return $this->First_name;
    }

    public function setFirstName(string $First_name): self
    {
        $this->First_name = $First_name;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->Last_name;
    }

    public function setLastName(string $Last_name): self
    {
        $this->Last_name = $Last_name;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->Address;
    }

    public function setAddress(string $Address): self
    {
        $this->Address = $Address;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->City;
    }

    public function setCity(string $City): self
    {
        $this->City = $City;

        return $this;
    }

    public function getZipCode(): ?string
    {
        return $this->ZipCode;
    }

    public function setZipCode(string $ZipCode): self
    {
        $this->ZipCode = $ZipCode;

        return $this;
    }

    public function getMail(): ?string
    {
        return $this->Mail;
    }

    public function setMail(string $Mail): self
    {
        $this->Mail = $Mail;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->Phone;
    }

    public function setPhone(string $Phone): self
    {
        $this->Phone = $Phone;

        return $this;
    }

    public function getUpdatedDate(): ?\DateTimeInterface
    {
        return $this->Updated_date;
    }

    public function setUpdatedDate(?\DateTimeInterface $Updated_date): self
    {
        $this->Updated_date = $Updated_date;

        return $this;
    }

    public function getCreatedDate(): ?\DateTimeInterface
    {
        return $this->Created_date;
    }

    public function setCreatedDate(\DateTimeInterface $Created_date): self
    {
        $this->Created_date = $Created_date;

        return $this;
    }

    public function getDeletedDate(): ?\DateTimeInterface
    {
        return $this->Deleted_date;
    }

    public function setDeletedDate(?\DateTimeInterface $Deleted_date): self
    {
        $this->Deleted_date = $Deleted_date;

        return $this;
    }
}
