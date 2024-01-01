import { Container } from 'typewired';
import { AppService } from './app.service';

export const APP_SERVICE_TOKEN = Symbol.for('AppServiceInterface');

Container.registerInterface(APP_SERVICE_TOKEN, AppService);
