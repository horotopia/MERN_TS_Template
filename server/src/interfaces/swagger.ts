export interface SwaggerTypes {
    swagger: string
    info: {
      version: string
      title: string
      description: string
    }
    host: string
    basePath: string
    schemes: string[]
    paths: Record<string, string> // Vous pouvez ajuster le type de paths en fonction de la structure réelle attendue.
  }
  