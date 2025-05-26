# 🧠 GOF Behavioral Design Patterns

Este repositório demonstra os **padrões de projeto comportamentais** definidos pelos autores conhecidos como _Gang of Four (GoF)_. Esses padrões lidam com **comunicação e responsabilidades entre objetos**, promovendo flexibilidade e desacoplamento no comportamento de sistemas orientados a objetos.

---

## 🤝 O que são padrões comportamentais?

Padrões comportamentais focam em **como os objetos interagem entre si**, quais responsabilidades cada um assume e **como essas interações são organizadas**. Eles ajudam a reduzir o acoplamento entre componentes, facilitando mudanças e a manutenção do código.

---

## 🧩 Padrões Comportamentais incluídos

| Padrão                      | Descrição                                                                                                                             |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **Chain of Responsibility** | Evita acoplamento entre o remetente e o receptor ao permitir que mais de um objeto lide com a requisição.                             |
| **Command**                 | Encapsula uma solicitação como um objeto, permitindo parametrizar clientes com filas, operações de desfazer e log.                    |
| **Interpreter**             | Fornece uma maneira de avaliar sentenças em uma linguagem, definindo uma gramática e um interpretador para ela.                       |
| **Iterator**                | Fornece uma maneira de acessar os elementos de um objeto agregado sequencialmente, sem expor sua representação subjacente.            |
| **Mediator**                | Define um objeto que encapsula como um conjunto de objetos interage, promovendo o baixo acoplamento.                                  |
| **Memento**                 | Captura e externaliza o estado interno de um objeto, permitindo restaurá-lo futuramente sem violar o encapsulamento.                  |
| **Observer**                | Define uma dependência um-para-muitos entre objetos, de modo que quando um muda de estado, todos os seus dependentes são notificados. |
| **State**                   | Permite que um objeto altere seu comportamento quando seu estado interno muda, parecendo que mudou sua classe.                        |
| **Strategy**                | Define uma família de algoritmos, encapsula cada um e os torna intercambiáveis.                                                       |
| **Template Method**         | Define o esqueleto de um algoritmo em uma operação, postergando alguns passos para subclasses.                                        |
| **Visitor**                 | Permite adicionar novas operações a objetos sem modificar suas classes.                                                               |

---

## 📁 Estrutura do Projeto

```bash
├── chain_of_responsibility/
│   └── example.ts
├── command/
│   └── example.ts
├── interpreter/
│   └── example.ts
├── iterator/
│   └── example.ts
├── mediator/
│   └── example.ts
├── memento/
│   └── example.ts
├── observer/
│   └── example.ts
├── state/
│   └── example.ts
├── strategy/
│   └── example.ts
├── template_method/
│   └── example.ts
├── visitor/
│   └── example.ts
├── README.md
```

---

## 🛠️ Tecnologias

- Linguagem: Python (ou Java, TypeScript, C#, etc.)
- Paradigma: Programação Orientada a Objetos

---

## 🚀 Como executar os exemplos

```bash
cd observer
npm start
```

Repita o processo nas outras pastas para explorar cada padrão comportamental.

---

## 📚 Referência

- _Design Patterns: Elements of Reusable Object-Oriented Software_ – Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides (GoF)
- [Refactoring.Guru – Behavioral Patterns](https://refactoring.guru/design-patterns/behavioral-patterns)
