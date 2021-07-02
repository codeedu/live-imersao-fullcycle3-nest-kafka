# Imersão Full Stack & FullCycle - Nest.js com Kafka

## Descrição

Repositório do Apache Kafka

## Configurar /etc/hosts

A comunicação entre as aplicações se dá de forma direta através da rede da máquina.
Para isto é necessário configurar um endereços que todos os containers Docker consigam acessar.

Acrescente no seu /etc/hosts (para Windows o caminho é C:\Windows\system32\drivers\etc\hosts):
```
127.0.0.1 host.docker.internal
```
Em todos os sistemas operacionais é necessário abrir o programa para editar o *hosts* como Administrator da máquina ou root.

## Rodar a aplicação

Execute os comandos:

```
docker-compose up
```

Quando parar os containers do Kafka, lembre-se antes de rodar o **docker-compose up**, rodar o **docker-compose down** para limpar o armazenamento, senão lançará erro ao subir novamente.
