'use strict';

module.exports = {
  swaggerDefinition: {
    // 정보
    info: {
      title: 'yeramdri-api',
      version: '1.0.0',
      description: 'yeramdri api doc'
    },
    // 주소
    host: 'localhost:6508',
    // 기본 root path
    basePath: '/',
    contact: {
      email: ''
    },
    // 각 api에서 설명을 기록할 때 사용할 constant들을 미리 등록해놓는것
    components: {
      res: {
        BadRequest: {
          description: '잘못된 요청입니다',
          schema: {
            $ref: '#/components/errorResult/Error'
          }
        },
        Forbidden: {
          description: '권한이 없습니다',
          schema: {
            $ref: '#/components/errorResult/Error'
          }
        },
        NotFound: {
          description: '해당 리소스가 없습니다',
          schema: {
            $ref: '#/components/errorResult/Error'
          }
        }
      },
      errorResult: {
        Error: {
          type: 'object',
          properties: {
            errMsg: {
              type: 'string',
              description: '에러 메시지 전달.'
            }
          }
        }
      }
    },
    schemes: ['http', 'https'], // 가능한 통신 방식
    definitions: {}
  },
  apis: ['./routes/**/*.js'] // api 파일 위치들
};