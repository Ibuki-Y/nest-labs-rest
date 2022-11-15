import { Controller, Get } from '@nestjs/common';
import { Department } from '@prisma/client';
import { DepartmentService } from './department.service';

@Controller('department')
export class DepartmentController {
  constructor(private departmentService: DepartmentService) {}

  @Get()
  getDepartments(): Promise<Department[]> {
    return this.departmentService.getDepartments();
  }
}
