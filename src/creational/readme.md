# 🧠 Padrões Criacionais - GoF (Gang of Four)

Este repositório apresenta uma explicação e implementação prática dos **padrões de projeto criacionais** definidos pelos autores do livro _"Design Patterns: Elements of Reusable Object-Oriented Software"_ (GoF).

Os padrões criacionais são responsáveis por abstrair o processo de instanciamento de objetos, oferecendo maior flexibilidade e controle sobre a criação.

## 📚 Padrões Criacionais

| Padrão        | Descrição                                                                 |
|---------------|---------------------------------------------------------------------------|
| Singleton     | Garante que uma classe tenha apenas uma instância e fornece um ponto global de acesso. |
| Factory Method| Define uma interface para criar objetos, mas permite que as subclasses decidam qual classe instanciar. |
| Abstract Factory | Fornece uma interface para criar famílias de objetos relacionados sem especificar suas classes concretas. |
| Builder       | Separa a construção de um objeto complexo da sua representação, permitindo a criação passo a passo. |
| Prototype     | Permite criar novos objetos clonando uma instância existente (protótipo). |

---

## 🔧 Exemplos de Uso

- `Singleton`: Gerenciador de configurações da aplicação.
- `Factory Method`: Criador de documentos com diferentes formatos (PDF, DOC).
- `Abstract Factory`: UI toolkit multiplataforma (ex: botões e janelas para Windows/macOS).
- `Builder`: Montagem de um sanduíche, carro ou objeto JSON complexo.
- `Prototype`: Clonagem de personagens em um jogo com atributos semelhantes.

---

## 📁 Estrutura do Projeto

```bash
├── singleton/
│   └── singleton.ts
├── factory-method/
│   └── creator.ts
├── abstract-factory/
│   └── UIFactory.ts
├── builder/
│   └── CarBuilder.ts
├── prototype/
│   └── Prototype.ts
