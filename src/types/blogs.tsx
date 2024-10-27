export interface BlogPost {
   id: number;
   title: string;
   text: string;
   image?: string;
   author: string;
}

export interface DropDownMenuProps {
   options: { label: string; onClick: () => void }[];
   darkModeEnabled: boolean;
   index: number;
}
