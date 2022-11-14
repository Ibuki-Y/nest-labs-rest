import { Controller, Get } from '@nestjs/common';
import { Faculty } from '@prisma/client';
import { FacultyService } from './faculty.service';

@Controller('faculty')
export class FacultyController {
  constructor(private facultyService: FacultyService) {}

  @Get()
  getFaculties(): Promise<Faculty[]> {
    return this.facultyService.getFaculties();
  }
}
