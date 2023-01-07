import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Faculty } from '@prisma/client';
import { FacultyService } from './faculty.service';

@Controller('faculty')
export class FacultyController {
  constructor(private facultyService: FacultyService) {}

  @Get()
  async getFaculties(): Promise<Faculty[]> {
    const start = performance.now();
    const faculties = this.facultyService.getFaculties();
    const end = performance.now();
    console.log(`getFaculties: ${end - start}`);
    return faculties;
  }

  @Get(':id')
  async getFacultyById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Faculty> {
    const start = performance.now();
    const faculty = this.facultyService.getFacultyById(id);
    const end = performance.now();
    console.log(`getFacultyById: ${end - start}`);
    return faculty;
  }
}
