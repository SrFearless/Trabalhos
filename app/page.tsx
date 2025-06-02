"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

interface ActionItem {
  label: string
  modalTitle: string
  modalMessage: string
  href: string
  image: string
  modalImage?: string
}

export default function AcademicWorks() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(true)
  const [showConfirmModal, setShowConfirmModal] = useState(false)
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
    <div className="min-h-screen bg-stone-900 bg-[url('/images/medieval-bg.jpg')] bg-cover bg-fixed">
      {/* Banner superior */}
      <div className="bg-black/70 border-b-4 border-amber-800 py-4 shadow-lg">
        <h1 className="text-3xl md:text-4xl font-pixel text-center text-amber-400 tracking-wider">
          📜 Trabalhos Acadêmicos
        </h1>
        <p className="text-center text-amber-200 mt-2 font-pixel text-sm">
          Meus projetos e exercícios acadêmicos
        </p>
      </div>

      {/* Grid de trabalhos */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {actions.map((action, idx) => (
            <div
              key={action.label + idx}
              className="relative group transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => handleOpen(action)}
            >
              {/* Moldura decorativa */}
              <div className="absolute inset-0 border-4 border-amber-700 rounded-lg pointer-events-none"></div>
              <div className="absolute inset-1 border-2 border-amber-500/50 rounded pointer-events-none"></div>
              
              {/* Carta de trabalho */}
              <div 
                className="relative w-full h-64 rounded bg-stone-800 overflow-hidden bg-cover bg-center shadow-lg"
                style={{ backgroundImage: `url(${action.image})` }}
              >
                {/* Overlay e título */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 flex items-end p-4">
                  <h3 className="text-xl font-pixel text-amber-200 text-center w-full">
                    {action.label}
                  </h3>
                </div>
                
                {/* Selo de categoria */}
                <div className="absolute top-2 right-2 bg-amber-700 text-amber-100 font-pixel text-xs px-2 py-1 rounded-full">
                  {action.modalTitle.includes("MySQL") ? "Banco de Dados" : 
                   action.modalTitle.includes("PlantUML") ? "Análise" : 
                   action.modalTitle.includes("HTML") ? "Web Design" : "Vazio"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de descrição (estilo pergaminho) */}
      {showConfirmModal && selectedItem && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-stone-800 border-4 border-amber-700 rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-auto shadow-xl">
            <div className="border-b border-amber-600 pb-3 mb-4">
              <h2 className="text-2xl font-pixel text-amber-300 text-center">
                {selectedItem.modalTitle}
              </h2>
            </div>
            
            <div className="bg-stone-700/80 border border-amber-900 p-4 rounded mb-6">
              <pre className="font-mono text-amber-100 text-sm whitespace-pre-wrap overflow-auto">
                {selectedItem.modalMessage}
              </pre>
            </div>
            
            <div className="flex justify-center space-x-4">
              <Button 
                onClick={handleCancel}
                className="font-pixel bg-stone-700 hover:bg-stone-600 text-amber-300 border border-amber-700"
              >
                Voltar
              </Button>
              <Button 
                onClick={handleConfirm}
                className="font-pixel bg-amber-700 hover:bg-amber-600 text-stone-100"
              >
                Ver Resultado
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de imagem (estilo vitral medieval) */}
      {showImageModal && selectedItem && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-stone-800 border-4 border-amber-700 rounded-lg overflow-hidden shadow-2xl max-w-5xl w-full">
            <div className="bg-stone-900 border-b border-amber-800 p-3">
              <h3 className="text-xl font-pixel text-amber-300 text-center">
                {selectedItem.label} - Resultado Final
              </h3>
            </div>
            
            <div className="p-4 bg-black flex justify-center max-h-[70vh] overflow-auto">
              {selectedItem.modalImage ? (
                <img 
                  src={selectedItem.modalImage} 
                  alt={selectedItem.label} 
                  className="max-w-full object-contain"
                />
              ) : (
                <div className="p-8 text-center text-amber-200 font-pixel">
                  Sem preview disponível
                </div>
              )}
            </div>
            
            <div className="bg-stone-900 border-t border-amber-800 p-3 flex justify-center">
              <Button 
                onClick={handleCloseImage}
                className="font-pixel bg-amber-700 hover:bg-amber-600 text-stone-100"
              >
                Fechar
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}