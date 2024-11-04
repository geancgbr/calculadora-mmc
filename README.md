# Calculadora de MMC

Este projeto é uma aplicação web para calcular o menor múltiplo comum (MMC) de todos os números dentro de um intervalo especificado.

## Tecnologias Utilizadas

- **Frontend**: React, Axios
- **Backend**: Django, Django REST Framework, Django CORS Headers
- **Estilização**: CSS

## Pré-requisitos

- **Python 3.x** e **pip**
- **Node.js** e **npm** (ou **yarn**, opcional)
- **Git** (para clonar o repositório)

---

## Como Configurar o Projeto Localmente

### 1. Clone o Repositório

Abra o terminal e execute o seguinte comando para clonar o repositório:


# Como Executar o Projeto

Siga estas etapas para configurar e executar o projeto localmente.

---

# 1. Clone o Repositório

Abra o terminal e execute o seguinte comando para clonar o repositório:

```bash
git clone https://github.com/geancgbr/calculadora-mmc.git
```
# 2. Configuração do Backend (Django)

1.	Navegue até o diretório do projeto:
```bash
cd calculadora-mmc
```
2.	Crie e ative um ambiente virtual:
```bash
python -m venv venv
source venv/bin/activate  # No Windows, use: venv\Scripts\activate
```
3. Instale as dependências do backend:
```bash
pip install -r requirements.txt
```
4. Execute as migrações do Django:
```bash
python manage.py migrate
```
5. Inicie o servidor Django:
```bash
python manage.py runserver
```
O backend estará disponível em http://localhost:8000.

# 3. Configuração do Frontend (React)

1. Navegue até o diretório frontend:
```bash
cd frontend
```
2. Instale as dependências do frontend:
```bash
npm install
```
3. Inicie o servidor de desenvolvimento do React:
```bash
npm start
```
O frontend estará disponível em http://localhost:3000.

4. Acessando a Aplicação

	-	Frontend: Acesse em http://localhost:3000
	-	Backend (API): Acesse em http://localhost:8000

Agora a aplicação está configurada e pronta para uso!

<img width="598" alt="Captura de Tela 2024-11-04 às 15 15 49" src="https://github.com/user-attachments/assets/1da61845-ae4a-43b8-acbd-08a0993c266a">





    


  
