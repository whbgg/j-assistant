import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { DeviceModule } from './modules/device/device.module';
import { AgentModule } from './modules/agent/agent.module';
import { SessionModule } from './modules/session/session.module';
import { TaskModule } from './modules/task/task.module';
import { KnowledgeModule } from './modules/knowledge/knowledge.module';
import { McpModule } from './modules/mcp/mcp.module';
import { WebsocketModule } from './modules/websocket/websocket.module';
import { AdminModule } from './modules/admin/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    DeviceModule,
    AgentModule,
    SessionModule,
    TaskModule,
    KnowledgeModule,
    McpModule,
    WebsocketModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
