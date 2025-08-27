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
        `                                          OBSERVAÇÃO !!!
Perdi o Arquivo com os códigos, assim como as imagens. Então só coloquei os Requisitos e Prints do Arquivo enviado (Por isso a Péssima Qualidade).

        Criação de diagrama de caso de uso 
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
      `                                          OBSERVAÇÃO !!!
Coloquei somente o Inicio pelo fato que eu usava esse Site como meu Portifólio.
      
        <!DOCTYPE html> 
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
      label: "Estrutura de Dados (Lista Encadeada)",
      modalTitle: "Linguagem de Programação - Python",
      modalMessage:
        `class Nodo: 

    def __init__(self, numero, cor): 
        self.numero = numero 
        self.cor = cor 
        self.proximo = None 
 
class FilaTriagem: 
    def __init__(self): 
        self.head = None 
        self.cont_verde = 1 
        self.cont_amarelo = 201 
 
    def adicionar_sem_prioridade(self, nodo): 
        if not self.head: 
            self.head = nodo 
        else: 
            atual = self.head 
            while atual.proximo: 
                atual = atual.proximo 
            atual.proximo = nodo 
 
    def adicionar_com_prioridade(self, nodo): 
        if not self.head or self.head.cor == 'V': 
            nodo.proximo = self.head 
            self.head = nodo 
        else: 
            atual = self.head 
            while atual.proximo and atual.proximo.cor == 'A': 
                atual = atual.proximo 
            nodo.proximo = atual.proximo 
            atual.proximo = nodo 
 
    def inserir_paciente(self): 
        while True: 
            escolha = input("Tipo de cartão (A=Amarelo, V=Verde): ").strip().upper() 
            if escolha in ('A','V'): 
                break 
            print("Opção inválida. Digite A ou V.") 
        if escolha == 'V': 
            numero = self.cont_verde 
            self.cont_verde += 1 
        else: 
            numero = self.cont_amarelo 
            self.cont_amarelo += 1 
 
        novo = Nodo(numero, escolha) 
        if not self.head: 
            self.head = novo 
        elif escolha == 'V': 
            self.adicionar_sem_prioridade(novo) 
        else: 
            self.adicionar_com_prioridade(novo) 
 
        print(f"Paciente {escolha} de Número {numero} Foi Adicionado à Fila.") 
 
    def mostrar_fila(self): 
        if not self.head: 
            print("A fila está vazia.") 
            return 
        print("Fila de Espera:") 
        atual = self.head 
        while atual: 
            print(f"  • Prioridade {atual.cor} Número {atual.numero}") 
            atual = atual.proximo 
 
    def chamar_proximo(self): 
        if not self.head: 
            print("Não há pacientes para chamar.") 
            return 
        chamado = self.head 
        self.head = self.head.proximo 
        print(f"Chamando Paciente de Prioridade {chamado.cor} Número {chamado.numero} para atendimento.") 
 
def menu(): 
    fila = FilaTriagem() 
    while True: 
        print("\n=== Menu ===") 
        print("1 = Adicionar Paciente na Fila") 
        print("2 = Ver Lista de Espera") 
        print("3 = Chamar Paciente") 
        print("4 = Sair") 
        opc = input("Escolha: ").strip() 
        if opc == '1': 
            fila.inserir_paciente() 
        elif opc == '2': 
            fila.mostrar_fila() 
        elif opc == '3': 
            fila.chamar_proximo() 
        elif opc == '4': 
            print("Encerrando. Até logo!") 
            break 
        else: 
            print("Escolha inválida. Tente de novo.") 
 
if __name__ == "__main__": 
    menu()`,
      href: "",
      image: "/images/Uninter.jpg",
      modalImage: "/images/trabalho4.png",
    },
    {
      label: "Estrutura de Dados (Tabela Hash)",
      modalTitle: "Linguagem de Programação - Python",
      modalMessage:
        `class Nodo: 
    def __init__(self, sigla, nome): 
        self.sigla = sigla 
        self.nome = nome 
        self.proximo = None 
 
class HashEmplacamento: 
    def __init__(self): 
        self.tabela = [None] * 10 
 
    def funcao_hash(self, sigla): 
        if sigla == 'DF': 
            return 7 
        return (ord(sigla[0]) + ord(sigla[1])) % 10 
 
    def inserir(self, sigla, nome): 
        pos = self.funcao_hash(sigla) 
        novo = Nodo(sigla, nome) 
        novo.proximo = self.tabela[pos] 
        self.tabela[pos] = novo 
 
    def imprimir(self): 
        for i, head in enumerate(self.tabela): 
            print(f"{i} →", end="") 
            atual = head 
            while atual: 
                print(f" {atual.sigla} →", end="") 
                atual = atual.proximo 
            print(" None") 
 
if __name__ == "__main__": 
    tabela = HashEmplacamento() 
 
    estados = [ 
        ('MA','Maranhão'), ('MT','Mato Grosso'), ('MS','Mato Grosso do Sul'), 
        ('RO','Rondônia'), ('RR', 'Roraima'), ('SC', 'Santa Catarina'), 
        ('SP','São Paulo'), ('SE', 'Sergipe'), ('TO', 'Tocantins'), 
        ('MG','Minas Gerais'), ('PA','Pará'), ('PB','Paraíba'), ('PR','Paraná'), 
        ('AC','Acre'), ('AL', 'Alagoas'), ('AP', 'Amapá'), ('AM', 'Amazonas'), 
        ('BA','Bahia'), ('CE', 'Ceará'), ('ES', 'Espírito Santo'), ('GO', 'Goiás'), 
        ('PE','Pernambuco'), ('PI','Piauí'), ('RJ','Rio de Janeiro'), 
        ('RN','Rio Grande do Norte'), ('RS','Rio Grande do Sul'), 
        ('DF','Distrito Federal') 
    ] 
 
    for sigla, nome in estados: 
        tabela.inserir(sigla, nome) 
 
    tabela.inserir('TM', 'Tiago de Freitas Machado') 
 
    print("\nEmplacamentos Representados pelos Estados:") 
    tabela.imprimir()`,
      href: "",
      image: "/images/Uninter.jpg",
      modalImage: "/images/trabalho5.png",
    },
    {
      label: "Banco de Dados NoSQL (IMPORTAÇÃO)",
      modalTitle: "Linguagem de Programação - Neo4j",
      modalMessage:
        `MERGE(:RU{ru:"RU-0000000"});
CALL apoc.load.directory("*.json") YIELD value AS filename
CALL apoc.load.json(filename) YIELD value
UNWIND coalesce(value.data,[]) AS tweet
MERGE(u:User{user_id:tweet.author_id,ru:"RU-0000000"})
MERGE(t:Tweet{id_tuite:tweet.id,ru:"RU-0000000"}) ON CREATE SET
  t.text=tweet.text,
  t.created_at=datetime(tweet.created_at),
  t.tipos_ref=[r IN coalesce(tweet.referenced_tweets,[])|r.type],
  t.ids_ref=[r IN coalesce(tweet.referenced_tweets,[])|r.id]
MERGE(u)-[:POSTOU]->(t)
FOREACH(h IN coalesce(tweet.entities.hashtags,[])|
  MERGE(tag:Hashtag{tag:apoc.text.replace(apoc.text.clean(h.tag),"[^a-zA-Z0-9]","")})
  MERGE(t)-[:POSSUI]->(tag)
);

Depois:

MATCH(t:Tweet)
WHERE "retweeted" IN t.tipos_ref
REMOVE t:Tweet
SET t:Retweeted;

Depois:

MATCH(t:Tweet)
WHERE "replied_to" IN t.tipos_ref
REMOVE t:Tweet
SET t:Replied_to;

Depois:

MATCH(t:Tweet)
WHERE "quoted" IN t.tipos_ref
REMOVE t:Tweet
SET t:Quoted;

`,
      href: "",
      image: "/images/Uninter.jpg",
      modalImage: "/images/trabalho6.png",
    },
    {
      label: "Banco de Dados NoSQL (DESCOBERTA)",
      modalTitle: "Linguagem de Programação - Neo4j",
      modalMessage:
        `MATCH (t:Tweet {ru:"RU-0000000"})-[:POSSUI]->(h:Hashtag)
WITH h.tag AS hashtag, COUNT(DISTINCT t) AS total_tweets
MATCH (total:Tweet {ru:"RU-0000000"})
WITH hashtag, total_tweets, COUNT(DISTINCT total) AS total_originais
WHERE total_tweets = total_originais
RETURN hashtag, total_tweets
ORDER BY total_tweets DESC
LIMIT 1;

Depois:

MATCH (t:Tweet {ru:"RU-0000000"})-[:POSSUI]->(h:Hashtag {tag: "issoaglobonaomostra"})
WITH h, t LIMIT 20
MATCH (t)-[:POSTOU]-(u:User)
RETURN h, t, u;`,
      href: "",
      image: "/images/Uninter.jpg",
      modalImage: "/images/trabalho7.png",
    },
    {
      label: "Banco de Dados NoSQL (ANÁLISE)",
      modalTitle: "Linguagem de Programação - Neo4j",
      modalMessage:
        `MATCH (u:User {ru:"RU-0000000"})-[:POSTOU]->(t:Tweet)
WITH u.user_id AS usuário, COUNT(t) AS totalTweets
RETURN usuário, totalTweets
ORDER BY totalTweets DESC
LIMIT 1;

Depois:

MATCH (u:User {ru:"RU-0000000"})-[:POSTOU]->(t:Tweet)
WITH u, COUNT(t) AS totalTweets
ORDER BY totalTweets DESC
LIMIT 1
MATCH (u)-[:POSTOU]->(t2:Tweet)-[:POSSUI]->(h:Hashtag)
WITH u, t2, h
LIMIT 20
RETURN u, t2, h;`,
      href: "",
      image: "/images/Uninter.jpg",
      modalImage: "/images/trabalho8.png",
    },
    {
      label: "Linguagem de Programação Aplicada",
      modalTitle: "Linguagem de Programação - Python",
      modalMessage:
        `import pygame
import sys
import random
import math
from src.player import Player
from src.enemy import Enemy

# Inicialização do Pygame
pygame.init()

# Configurações da janela
SCREEN_WIDTH = 1600
SCREEN_HEIGHT = 1200
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption("NemesisoftheWord")
clock = pygame.time.Clock()
FPS = 60

# Cores para o menu
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
GRAY = (100, 100, 100)
DARK_GRAY = (50, 50, 50)
GOLD = (255, 215, 0)
RED = (255, 0, 0)
GREEN = (0, 255, 0)
BLUE = (0, 100, 255)


# Estados do jogo
class GameState:
    MENU = "menu"
    PLAYING = "playing"
    GAME_OVER = "game_over"
    OPTIONS = "options"
    CREDITS = "credits"
...`,
      href: "",
      image: "/images/Uninter.jpg",
      modalImage: "/images/trabalho8.png",
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
    <div className="min-h-screen bg-stone-900 bg-cover bg-fixed">
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
                  {action.modalTitle.includes("MySQL") ? "Análise e Dev de Sistemas" : 
                   action.modalTitle.includes("PlantUML") ? "Análise e Dev de Sistemas" : 
                   action.modalTitle.includes("HTML") ? "Análise e Dev de Sistemas" :
                   action.modalTitle.includes("Python") ? "Análise e Dev de Sistemas" :
                   action.modalTitle.includes("Neo4j") ? "Análise e Dev de Sistemas" : "Vazio"}                   
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