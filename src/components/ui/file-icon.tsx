import { cn } from '@/lib/utils';
import {
  ChevronDown,
  ChevronRight,
  FileChartColumn,
  FileIcon,
  FileJson2Icon,
  FileQuestion,
  FileSpreadsheet,
  FileText,
  FileType2,
  FolderClosedIcon as FolderIcon,
  Image as ImageIcon,
  ListTree,
  Presentation,
  SearchIcon,
  Share2Icon,
  ShareIcon,
  WorkflowIcon,
} from 'lucide-react';

export default function getIconForResource(type: string, className?: string) {
  switch (type) {
    case 'application/json':
      return <FileJson2Icon className={cn('w-4 h-4', className)} />;
    case 'folder':
      return (
        <FolderIcon className={cn('w-4 h-4  text-yellow-500', className)} />
      );
    case 'application/pdf':
      return <FileText className={cn('w-4 h-4 text-red-500', className)} />;
    case 'csv':
      return (
        <FileSpreadsheet className={cn('w-4 h-4  text-green-500', className)} />
      );
    case 'xlsx':
    case 'xls':
    case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
      return (
        <FileChartColumn className={cn('w-4 h-4  text-green-500', className)} />
      );
    case 'docx':
      return <FileIcon className={cn('w-4 h-4  text-blue-500', className)} />;
    case 'pptx':
      return (
        <Presentation className={cn('w-4 h-4  text-orange-500', className)} />
      );
    case 'txt':
      return (
        <FileType2 className={cn('w-4 h-4  text-purple-500', className)} />
      );
    case 'workflow':
      return (
        <WorkflowIcon className={cn('w-4 h-4  text-green-500', className)} />
      );
    case 'jpeg':
    case 'jpg':
    case 'png':
    case 'image/jpeg':
      return <ImageIcon className={cn('w-4 h-4  text-cyan-500', className)} />;
    case 'mixed':
      return (
        <FileQuestion className={cn('w-4 h-4  text-lime-500', className)} />
      );
    default:
      return (
        <FileQuestion className={cn('w-4 h-4  text-lime-500', className)} />
      );
  }
}
