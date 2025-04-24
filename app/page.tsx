"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

interface ActionItem {
  label: string
  modalTitle: string
  modalMessage: string
  href: string        // você ainda pode usar para algo, mas não fará push
  image: string       // background do card
  modalImage?: string // imagem que será exibida no segundo passo
}

export default function Home() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(true)

  // passo 1: confirmação de texto
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  // passo 2: modal de imagem
  const [showImageModal, setShowImageModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState<ActionItem | null>(null)

  useEffect(() => {
    setIsVisible(!pathname.includes("/configuracoes"))
  }, [pathname])

  if (!isVisible) return null

  const actions: ActionItem[] = [
    {
      label: "Banco de Dados",
      modalTitle: "Linguagem de Programação - MySQL",
      modalMessage:
        `create database Livraria; 
        use Livraria; 
        create table Cliente ( 
        idCliente int not null, 
        nome varchar(50) not null, 
        telefone varchar(20) not null, 
        email varchar(50) not null, 
        endereco varchar(100) not null, 
        primary key (idCliente)); 
        create table Editora ( 
        idEditora int not null, 
        nome varchar(50) not null, 
        telefone varchar(20) not null, 
        email varchar(50) not null, 
        endereco varchar(100) not null, 
        primary key (idEditora)); 
        create table Pedido ( 
        idPedido int not null, 
        idCliente int not null, 
        dataPedido date not null, 
        valorPedido decimal(5,2) not null, 
        primary key (idPedido), 
        foreign key (idCliente) references Cliente (idCliente)); 
        create table Livro ( 
        idLivro int not null, 
        idEditora int not null,
        titulo varchar(100) not null, 
        autor varchar(50) not null, 
        ano int not null,ISBN varchar(20) not null, 
        preco decimal(5,2) not null, 
        primary key (idLivro), 
        foreign key (idEditora) references Editora (idEditora)); 
        create table ItemPedido ( 
        idPedido int not null, 
        idLivro int not null, 
        quantidade int not null, 
        valorItemPedido decimal(5,2) not null, 
        foreign key (idPedido) references Pedido (idPedido), 
        foreign key (idLivro) references Livro (idLivro)); 
        create table Estoque ( 
        idLivro int not null, 
        quantidade int not null, 
        foreign key (idLivro) references Livro (idLivro));`,
      href: "",
      image: "/images/Uninter.jpg",
      modalImage: "/images/trabalho2.jpg",
    },

    {
      label: "Análise de Sistemas",
      modalTitle: "Linguagem de Programação - PlantUML",
      modalMessage:
        `Criação de diagrama de caso de uso 
        Requisitos Funcionais: 
  
        ⦁ Cancelar Controle de Dispositivos por Voz          
        ⦁ Notificação ao Cliente          
        ⦁ Consulta ao Histórico de Acessos 
          
        Requisitos Não Funcionais: 
          
        ⦁ Audibilidade          
        ⦁ Escalabilidade de Usuários          
        ⦁ Latência Mínima

        Criação de diagrama de Classes. 
        Requisitos Funcionais: 
  
        ⦁ Controle de Acesso por Voz           
        ⦁ Controle de Dispositivos (Iluminação e Ar - Condicionado)          
        ⦁ Identificação Automática por 
        Câmera 
          
        Requisitos Não Funcionais: 
          
        ⦁ Escalabilidade 
        ⦁ Segurança 
        ⦁ Desempenho `,
      href: "",
      image: "/images/Uninter.jpg",
      modalImage: "/images/trabalho1.jpg",
    },

    {
      label: "Web Designer",
      modalTitle: "Linguagem de Programação - HTML e CSS",
      modalMessage:
        `<!DOCTYPE html> 
      <html lang="pt-br"> 
      <head> 
      <meta charset="UTF-8"> 
      <meta name="viewport" content="width=device-width, initial
      scale=1.0"> 
      <!-- GOOGLE FONTS --> 
      <link rel="preconnect" href="https://fonts.googleapis.com"> 
      <link rel="preconnect" href="https://fonts.gstatic.com" 
      crossorigin> 
      <link 
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,1
      00;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;
      1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"> 
      <!-- FIM GOOGLE FONTS--> 
      <!-- BOOTSTRAP ICONS--> 
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap
      icons@1.11.3/font/bootstrap-icons.min.css"> 
      <!-- FIM BOOTSTRAP ICONS--> 
      <link rel="stylesheet" href="(Uninter) Estilos.css"> 
      <title>Portifolio</title> 
      </head> 
      <body> 
      <header> 
      <div class="interface"> 
      <div class="logo"> 
      <a href="#"> 
      <img src="Logo.png" alt="Logo Esquadramer" 
      </a> 
      </div> 
      <nav class="menu-desktop"> 
      <ul> 
      <li><a href="#">Início</a></li> 
      <li><a href="#">Sobre</a></li> 
      <li><a href="#">Especialidade</a></li> 
      <li><a href="#">Projetos</a></li> 
      </ul> 
      </nav>`,
      href: "",
      image: "/images/Uninter.jpg",
      modalImage: "/images/trabalho3.jpg",
    },
    {
      label: "Vazio",
      modalTitle: "Esperando...",
      modalMessage:
        `Já Já mais trabalhos serão apresentados`,
      href: "",
      image: "/images/Vazio.jpg",
      modalImage: "/images/Vazio.jpg",
    },
    {
      label: "Vazio",
      modalTitle: "Esperando...",
      modalMessage:
        `Já Já mais trabalhos serão apresentados`,
      href: "",
      image: "/images/Vazio.jpg",
      modalImage: "/images/Vazio.jpg",
    },
    {
      label: "Vazio",
      modalTitle: "Esperando...",
      modalMessage:
        `Já Já mais trabalhos serão apresentados`,
      href: "",
      image: "/images/Vazio.jpg",
      modalImage: "/images/Vazio.jpg",
    },
    {
      label: "Vazio",
      modalTitle: "Esperando...",
      modalMessage:
        `Já Já mais trabalhos serão apresentados`,
      href: "",
      image: "/images/Vazio.jpg",
      modalImage: "/images/Vazio.jpg",
    },
    {
      label: "Vazio",
      modalTitle: "Esperando...",
      modalMessage:
        `Já Já mais trabalhos serão apresentados`,
      href: "",
      image: "/images/Vazio.jpg",
      modalImage: "/images/Vazio.jpg",
    },
    {
      label: "Vazio",
      modalTitle: "Esperando...",
      modalMessage:
        `Já Já mais trabalhos serão apresentados`,
      href: "",
      image: "/images/Vazio.jpg",
      modalImage: "/images/Vazio.jpg",
    },
    {
      label: "Vazio",
      modalTitle: "Esperando...",
      modalMessage:
        `Já Já mais trabalhos serão apresentados`,
      href: "",
      image: "/images/Vazio.jpg",
      modalImage: "/images/Vazio.jpg",
    },
    {
      label: "Vazio",
      modalTitle: "Esperando...",
      modalMessage:
        `Já Já mais trabalhos serão apresentados`,
      href: "",
      image: "/images/Vazio.jpg",
      modalImage: "/images/Vazio.jpg",
    },
    {
      label: "Vazio",
      modalTitle: "Esperando...",
      modalMessage:
        `Já Já mais trabalhos serão apresentados`,
      href: "",
      image: "/images/Vazio.jpg",
      modalImage: "/images/Vazio.jpg",
    },
    
  ]

  function handleOpen(item: ActionItem) {
    setSelectedItem(item)
    setShowConfirmModal(true)
  }

  function handleCancel() {
    setShowConfirmModal(false)
    setSelectedItem(null)
  }

  function handleConfirm() {
    setShowConfirmModal(false)
    setShowImageModal(true)
  }

  function handleCloseImage() {
    setShowImageModal(false)
    setSelectedItem(null)
  }

  return (
    <>
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center text-center">
          {actions.map((action, idx) => (
            <div
              key={action.label + idx}
              className="relative w-[250px] h-[250px] rounded-lg overflow-hidden border border-red-900 shadow-sm bg-cover bg-center"
              style={{ backgroundImage: `url(${action.image})` }}
            >
              <Button
                onClick={() => handleOpen(action)}
                className="absolute inset-0 bg-red-200/40 text-red-800 text-[24px] font-pixel hover:bg-red-500/60 hover:text-black"
              >
                {action.label}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* 1) Modal de confirmação de texto */}
      {showConfirmModal && selectedItem && (
  <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
    <div className="bg-red-100 rounded-lg p-6 max-w-lg w-full text-left">
      <h2 className="text-xl font-pixel mb-4 text-center">
        {selectedItem.modalTitle}
      </h2>
      <pre className="mb-6 whitespace-pre-wrap bg-white p-4 rounded text-sm overflow-auto">
        {selectedItem.modalMessage}
      </pre>
      <div className="flex justify-end space-x-4">
        <Button variant="ghost" onClick={handleCancel}>
          Cancelar
        </Button>
        <Button onClick={handleConfirm}>
          Resultado!
        </Button>
      </div>
    </div>
  </div>
)}

      {/* 2) Modal de imagem */}
      {showImageModal && selectedItem && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-md w-full">
            {selectedItem.modalImage
              ? <img src={selectedItem.modalImage} alt={selectedItem.label} className="w-full object-cover" />
              : <div className="p-6 text-center">Sem preview disponível</div>
            }
            <div className="flex justify-end bg-gray-100 p-4">
              <Button onClick={handleCloseImage}>
                Fechar
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
