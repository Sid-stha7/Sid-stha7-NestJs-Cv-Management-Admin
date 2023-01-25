import { Expose, Transform } from 'class-transformer';
import { User } from '../../users/user.entity';

export class ReportDto {
  @Expose()
  id: number;

  @Expose()
  name: string;
  @Expose()
  address: string;

  @Expose()
  contact: number;

  @Expose()
  approved: boolean;

  @Expose()
  cvFile: string;

  @Transform(({ obj }) => obj.user.id)
  @Expose()
  userId: number;
}
