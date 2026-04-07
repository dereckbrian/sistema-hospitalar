# 🏥 Brian's Medical Center - Sistema de Gestão Hospitalar

Um sistema completo para gestão de agendamentos de consultas médicas, focado no controle interno de clínicas e hospitais. A aplicação garante a segurança dos dados permitindo o acesso exclusivamente a funcionários credenciados, com níveis de hierarquia para administração do sistema.

## ✨ Funcionalidades

* **Autenticação e Segurança:** Login restrito apenas para funcionários da clínica.
* **Gestão de Acessos (Admin):** Um usuário Administrador (pré-cadastrado via banco de dados) possui a responsabilidade exclusiva de cadastrar novos funcionários no sistema.
* **Gestão de Pessoas:** Funcionários podem cadastrar, visualizar e editar informações de **Pacientes** e **Médicos**.
* **Agendamentos:** Interface para alocação de pacientes em consultas com médicos específicos, gerenciando a agenda da clínica.
* **Consultas de Registros:** Listagem e busca detalhada de todos os pacientes e médicos cadastrados no banco de dados.

## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando o padrão de arquitetura de API RESTful com as seguintes tecnologias:

### Front-end
* **React** (com TypeScript)
* **Tailwind CSS** (Estilização)
* **Axios** (Integração com a API)
* **React Router DOM** (Navegação SPA)
* **React Query** (Gerenciamento de estados e cache de requisições)

### Back-end
* **Java 17+**
* **Spring Boot**
* **Spring Security** (Controle de acesso e autenticação)
* **Spring Data JPA / Hibernate** (Mapeamento de Entidades)

### Banco de Dados & Ferramentas
* **PostgreSQL** (Banco de Dados Relacional)
* **Postman** (Testes de API e documentação de endpoints)
* **Git & GitHub** (Versionamento)

---

## ⚙️ Como executar o projeto localmente

### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
* [Git](https://git-scm.com)
* [Node.js](https://nodejs.org/en/)
* [Java JDK 17+](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
* [PostgreSQL](https://www.postgresql.org/)
