import { BrowserWindow } from "@/components/ui/BrowserWindow";


export function ShowcasePreview() {
  return (
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <div className="flex flex-col gap-4 text-center lg:text-left">
        <p className="text-label uppercase text-accent-cyan/90">How I work</p>
        <h3 className="font-heading text-h3 font-semibold text-neutral-text">
          Clean, typed, component-driven code.
        </h3>
        <p className="mx-auto max-w-md text-body-lg text-neutral-text/80 lg:mx-0">
          Every interface I ship is broken down into small, reusable, strongly-typed
          components - so the product stays easy to extend and safe to change.
        </p>
      </div>

      <BrowserWindow title="Button.tsx">
        <pre className="overflow-x-auto p-6 font-mono text-sm leading-7">
          <code>
            <span className="text-accent-cyan/80">{"export "}</span>
            <span className="text-accent-teal">function</span>{" "}
            <span className="text-neutral-text">Button</span>
            <span className="text-neutral-text/60">{"({ "}</span>
            <span className="text-neutral-text">variant, children</span>
            <span className="text-neutral-text/60">{" }: ButtonProps) {"}</span>
            {"\n"}
            <span className="text-neutral-text/60">{"  return ("}</span>
            {"\n"}
            <span className="text-neutral-text/60">{"    <button "}</span>
            <span className="text-accent-cyan/80">className</span>
            <span className="text-neutral-text/60">{"={cn("}</span>
            <span className="text-primary-magenta">{'"rounded-full"'}</span>
            <span className="text-neutral-text/60">{", "}</span>
            <span className="text-neutral-text">variant</span>
            <span className="text-neutral-text/60">{")}>"}</span>
            {"\n"}
            <span className="text-neutral-text/60">{"      {children}"}</span>
            {"\n"}
            <span className="text-neutral-text/60">{"    </button>"}</span>
            {"\n"}
            <span className="text-neutral-text/60">{"  );"}</span>
            {"\n"}
            <span className="text-neutral-text/60">{"}"}</span>
          </code>
        </pre>
      </BrowserWindow>
    </div>
  );
}
