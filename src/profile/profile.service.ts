import { Injectable } from '@nestjs/common';
import { Profile } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}

  async getProfiles(): Promise<Profile[]> {
    return this.prisma.profile.findMany();
  }

  async getProfileById(id: number): Promise<Profile> {
    return this.prisma.profile.findUnique({
      where: {
        id,
      },
    });
  }
}
