import { DropdownComponent } from "@components/index";

export const ExportFormat = () => {
  const options = [
    {
      name: "PDF",
      localizedName: "Acrobat (PDF) file",
    },
    {
      name: "CSV",
      localizedName: "CSV (comma delimited)",
    },
    {
      name: "XLSX",
      localizedName: "Excel Worksheet",
    },
    {
      name: "PPTX",
      localizedName: "PowerPoint Presentation",
    },
    {
      name: "RTF",
      localizedName: "Rich Text Format",
    },
    {
      name: "IMAGE",
      localizedName: "TIFF file",
    },
    {
      name: "DOCX",
      localizedName: "Word Document",
    },
  ];

  return <DropdownComponent options={options} />;
};
