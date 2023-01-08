import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ResponseTimeMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const start = performance.now();
    res.on('finish', () => {
      const elapsed = performance.now() - start;
      console.log(`Request to ${req.originalUrl} took ${elapsed}ms`);
    });
    next();
  }
}
