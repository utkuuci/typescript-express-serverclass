export default function Controller(options: {path: string}) {
    return (target: Function) => {
        target.prototype.path = options.path;
    }
}
