import type { JSX, ComponentProps } from "react";

const Table = ({ children, className, ...props }: ComponentProps<"div">): JSX.Element => (
    <div 
        className={`w-full overflow-x-auto rounded-2xl border border-neutral-200 bg-white shadow-xs ${className ?? ""}`} 
        {...props}
    >
        <table className="w-full text-sm text-left">
            {children}
        </table>
    </div>
);

const TableHeader = ({ children, className, ...props }: ComponentProps<"thead">): JSX.Element => (
    <thead 
        className={`border-b border-neutral-200 bg-neutral-50 ${className ?? ""}`} 
        {...props}
    >
        {children}
    </thead>
);

const TableRow = ({ children, className, ...props }: ComponentProps<"tr">): JSX.Element => (
    <tr 
        className={`transition-colors duration-300 hover:bg-neutral-50 ${className ?? ""}`} 
        {...props}
    >
        {children}
    </tr>
);

const TableHead = ({ children, className, ...props }: ComponentProps<"th">): JSX.Element => (
    <th 
        className={`p-3 md:px-4 md:py-3 font-semibold text-nowrap ${className ?? ""}`} 
        {...props}
    >
        {children}
    </th>
);

const TableBody = ({ children, className, ...props }: ComponentProps<"tbody">): JSX.Element => (
    <tbody 
        className={className} 
        {...props}
    >
        {children}
    </tbody>
);

const TableCell = ({ children, className, ...props }: ComponentProps<"td">): JSX.Element => (
    <td 
        className={`p-3 md:px-4 md:py-3 text-nowrap ${className ?? ""}`} 
        {...props}
    >
        {children}
    </td>
);

const TableEmpty = ({ colSpan, message }: { colSpan: number; message: string }): JSX.Element => (
    <tr>
        <td colSpan={colSpan} className="py-12 text-center text-neutral-400">
            {message}
        </td>
    </tr>
);

export {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
    TableEmpty,
}