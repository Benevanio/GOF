
```markdown
# 👑 Padrões de Projeto GoF (Gang of Four)

Este repositório contém implementações e explicações dos **23 padrões de projeto** catalogados pelos autores do livro *"Design Patterns: Elements of Reusable Object-Oriented Software"*, conhecidos como **Gang of Four (GoF)**.

## 🎯 Objetivo

Demonstrar o uso prático dos padrões de projeto, organizados em três categorias principais:
- **Padrões Criacionais**
- **Padrões Estruturais**
- **Padrões Comportamentais**

Cada padrão é implementado em **JavaScript** ou **TypeScript**, acompanhado de uma explicação simples e exemplos para facilitar o entendimento.

---

## 📦 Estrutura do Projeto

```

GOF/
│
├── criacionais/           # Padrões que tratam da criação de objetos
├── estruturais/           # Padrões que organizam a estrutura dos objetos
├── comportamentais/       # Padrões que lidam com a comunicação entre objetos
└── README.md              # Documentação principal

````

---

## 🧱 Padrões Criacionais

Esses padrões abstraem o processo de instanciamento de objetos, tornando o sistema mais flexível.

| Padrão            | Descrição |
|-------------------|-----------|
| **Singleton**     | Garante que uma classe tenha apenas uma instância e fornece um ponto de acesso global. |
| **Factory Method**| Define uma interface para criar um objeto, mas deixa as subclasses decidirem qual classe instanciar. |
| **Abstract Factory**| Cria famílias de objetos relacionados sem depender de suas classes concretas. |
| **Builder**       | Separa a construção de um objeto complexo da sua representação. |
| **Prototype**     | Cria novos objetos copiando uma instância existente (clone). |

---

## 🧩 Padrões Estruturais

Focados em compor classes e objetos para formar estruturas maiores e mais eficientes.

| Padrão         | Descrição |
|----------------|-----------|
| **Adapter**    | Permite a compatibilidade entre interfaces diferentes. |
| **Bridge**     | Desacopla a abstração da implementação. |
| **Composite**  | Compor objetos em estruturas de árvore. |
| **Decorator**  | Adiciona responsabilidades a um objeto dinamicamente. |
| **Facade**     | Fornece uma interface simplificada para um conjunto de interfaces. |
| **Flyweight**  | Reduz o uso de memória compartilhando dados comuns entre objetos semelhantes. |
| **Proxy**      | Um substituto ou lugar-holder para outro objeto para controlar o acesso a ele. |

---

## 🧠 Padrões Comportamentais

Tratam da comunicação e responsabilidades entre objetos.

| Padrão             | Descrição |
|--------------------|-----------|
| **Observer**       | Notifica múltiplos objetos sobre alterações em um objeto. |
| **Strategy**       | Permite a definição de uma família de algoritmos, encapsulando-os. |
| **Command**        | Encapsula uma solicitação como objeto. |
| **Chain of Responsibility** | Passa a solicitação ao longo de uma cadeia de objetos. |
| **Iterator**       | Acessa os elementos de um objeto sequencialmente. |
| **Mediator**       | Define um objeto que encapsula como os objetos interagem. |
| **Memento**        | Salva e restaura o estado anterior de um objeto. |
| **State**          | Permite que um objeto altere seu comportamento quando seu estado interno muda. |
| **Template Method**| Define o esqueleto de um algoritmo e permite que subclasses modifiquem etapas específicas. |
| **Visitor**        | Permite adicionar operações a objetos sem alterar suas classes. |
| **Interpreter**    | Implementa uma linguagem específica de domínio (DSL). |

---

## 🚀 Como usar

Clone o repositório:

```bash
git clone https://github.com/Benevanio/GOF.git
cd GOF
````

Navegue até a pasta desejada e execute os arquivos com Node.js:

```bash
node criacionais/Singleton.js
```

---

## 📚 Requisitos

* Node.js 18+ (ou superior)
* Git (para clonar o projeto)
* VS Code (opcional)

---

## 🤝 Contribuições

Contribuições são bem-vindas! Fique à vontade para enviar melhorias, exemplos adicionais ou refatorações.

---

## 🧠 Referências

* [Design Patterns: Elements of Reusable Object-Oriented Software (GoF)](https://en.wikipedia.org/wiki/Design_Patterns)
* [Refactoring Guru](https://refactoring.guru/design-patterns)

---

## 👤 Autor

Desenvolvido por **[Benevanio Dos Santos Conceição](https://github.com/Benevanio)**

---

## 🏷️ Licença

MIT License. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.
