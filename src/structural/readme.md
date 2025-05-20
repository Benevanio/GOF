# GOF Structural Design Patterns

Este repositório demonstra os **padrões de projeto estruturais** definidos pelos autores conhecidos como *Gang of Four (GoF)*. Os padrões estruturais descrevem como compor classes e objetos para formar estruturas maiores e mais flexíveis, promovendo reutilização e flexibilidade na arquitetura de software.

## 🧱 O que são padrões estruturais?

Padrões estruturais tratam da **composição de classes e objetos**, ajudando a garantir que partes do sistema funcionem juntas de forma eficiente. Diferente dos padrões criacionais (que focam na criação de objetos), os estruturais se concentram em **como os objetos são organizados** e interconectados.

---

## 📦 Padrões Estruturais incluídos

| Padrão        | Descrição                                                                                                                                             |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Adapter**   | Permite que interfaces incompatíveis trabalhem juntas, convertendo a interface de uma classe em outra esperada pelos clientes.                        |
| **Bridge**    | Separa uma abstração da sua implementação, permitindo que ambas evoluam independentemente.                                                            |
| **Composite** | Compõe objetos em estruturas de árvore para representar hierarquias parte-todo. Permite tratar objetos individuais e composições de maneira uniforme. |
| **Decorator** | Adiciona funcionalidades a objetos dinamicamente, sem alterar sua estrutura.                                                                          |
| **Facade**    | Fornece uma interface unificada para um conjunto de interfaces em um subsistema, facilitando o uso do mesmo.                                          |
| **Flyweight** | Usa o compartilhamento para suportar grandes quantidades de objetos de forma eficiente.                                                               |
| **Proxy**     | Fornece um substituto ou representante para outro objeto para controlar o acesso a ele.                                                               |

---

## 📁 Estrutura do Projeto

```bash
├── adapter/
│   └── example.ts
├── bridge/
│   └── example.ts
├── composite/
│   └── example.ts
├── decorator/
│   └── example.ts
├── facade/
│   └── example.ts
├── flyweight/
│   └── example.ts
├── proxy/
│   └── example.ts
├── README.md
```

---

## 🛠️ Tecnologias

* Linguagem: Python (ou Java, C#, etc. — dependendo da sua stack)
* Paradigma: Programação Orientada a Objetos

---

## 🚀 Como executar os exemplos

```bash
cd adapter
python example.py
```

Repita o processo nas outras pastas para testar os demais padrões.

---

## 📚 Referência

* *Design Patterns: Elements of Reusable Object-Oriented Software* – Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides (GoF)
* [Refactoring.Guru](https://refactoring.guru/design-patterns)
