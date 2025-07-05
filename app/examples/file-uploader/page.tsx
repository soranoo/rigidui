import ExampleTemplate from "@/components/example-template"
import { FileUploader } from "@/registry/new-york/file-uploader/file-uploader"

export default function FileUploaderExample() {
  return (
    <ExampleTemplate
      title="File Uploader"
      description="A powerful file upload component with drag & drop support, image cropping, and progress tracking."
      component={FileUploader}
      badges={["React", "TypeScript", "Drag & Drop", "Image Cropping"]}
    />
  )
}