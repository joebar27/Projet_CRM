<?php

namespace App\Service;

use App\Entity\User;
use Symfony\Component\Mime\Address;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;

class SendMail
{
    public function __construct(private MailerInterface $mailer)
    {
        $this->mailer = $mailer;
    }

    public function sendMail(User $user, $token)
    {
        $email = (new TemplatedEmail())
            ->from('test@gmail.com')
            ->to(new Address($user->getEmail()))
            ->subject('Modification de mot de passe')
            ->htmlTemplate('emails/reset_password.html.twig')
            ->context([
                'token' => $token,
                'user' => $user,
            ]);
        $this->mailer->send($email);
    }
}