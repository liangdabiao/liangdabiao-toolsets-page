#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
WordPress Chatbot Backend 启动脚本
使用方法: python run.py
"""

import os
import sys
from dotenv import load_dotenv
from app import app, Config

# 加载环境变量
load_dotenv()

def main():
    """主函数"""
    print("=" * 60)
    print("🤖 WordPress聊天机器人后端服务")
    print("基于阿里云百炼API的Python后端")
    print("=" * 60)

    # 检查必需的环境变量
    required_env_vars = ['API_KEY', 'APP_ID']
    missing_vars = [var for var in required_env_vars if not os.getenv(var)]

    if missing_vars:
        print("❌ 缺少必需的环境变量:")
        for var in missing_vars:
            print(f"   - {var}")
        print("\n请创建 .env 文件并设置这些变量，参考 .env.example")
        sys.exit(1)

    print(f"✅ 阿里云百炼 App ID: {Config.APP_ID}")
    print(f"🚀 服务地址: http://{Config.HOST}:{Config.PORT}")
    print(f"📡 流式API端点: http://{Config.HOST}:{Config.PORT}/myapi/v1/chat-bot/stream")
    print(f"📡 配置API端点: http://{Config.HOST}:{Config.PORT}/myapi/v1/chat-bot-config")
    print(f"📡 非流式API端点: http://{Config.HOST}:{Config.PORT}/myapi/v1/chat-bot")
    print(f"🔍 健康检查: http://{Config.HOST}:{Config.PORT}/health")
    print("=" * 60)
    print("⚡ 启动服务中...")

    try:
        app.run(
            host=Config.HOST,
            port=Config.PORT,
            debug=Config.DEBUG,
            threaded=True
        )
    except KeyboardInterrupt:
        print("\n👋 服务已停止")
    except Exception as e:
        print(f"❌ 启动失败: {str(e)}")
        sys.exit(1)

if __name__ == '__main__':
    main()