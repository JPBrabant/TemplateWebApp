export default interface IComponent {
    Render(): void;
    GenerateHTML(): HTMLElement;
}