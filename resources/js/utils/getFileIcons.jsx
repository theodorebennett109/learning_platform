import { Description, Image, InsertDriveFile, InsertDriveFileOutlined, PictureAsPdf } from '@mui/icons-material';
import React from 'react';


export default function getFileIcon(fileType) {
  // Convert to lowercase just to be safe
  const type = fileType?.toLowerCase();

  switch (type) {
    case 'pdf':
      return <PictureAsPdf sx={{color:'red'}} />
    case 'doc':
    case 'docx':
      return <Description sx={{ color: 'blue' }} />;
    case 'jpg':
    case 'jpeg':
    case 'png':
      return <Image sx={{ color: 'green' }} />;
    case 'xlsx':
    case 'xls':
      return <InsertDriveFile sx={{ color: 'teal' }} />;
    default:
      // Fallback icon for unknown extensions
      return <InsertDriveFileOutlined sx={{ color: 'gray' }} />;
  }
}
