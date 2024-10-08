import React from 'react';
import styled from 'styled-components';
import flag from '../assets/flag.png';
import sendIcon from '../assets/send-icon.png';
const TitleCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
padding-top: 150px;

`;

const Title = styled.p`
  font-family: Pretendard, sans-serif;
  color: #FFFFFF;
  font-size: 30px;
  font-weight: 500;
`;

const Detail = styled.p`
  font-family: Pretendard, sans-serif;
  color: #FFFFFF;
  font-size: 20px;
  font-weight: 300;
`;

const ChatContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  padding-right: 200px;
`;

const ChatCon = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-start;
  margin-bottom: 20px;
  margin-left: 200px;
`;

const ChatImg = styled.img`
  width: 36px;
  height: 36px;
`;

const ChatBox = styled.div`
  width: 286px;
  height: 50px;
  border-radius: 24px;
  border: 1px solid var(--Main_2, #01ECFF);
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0px 4px 16px 4px #01ECFE33;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  padding-left: 16px;
`;

const UserChatCon = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-end;
  width: 100%;
`;

const UserChatBox = styled.div`
  width: 286px;
  height: 50px;
  border-radius: 24px;
  border: 1px solid var(--Main_2, #01ECFF);
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 4px 16px 4px #01ECFE33;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChatInputContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 1160px;
  height: 60px;
  padding: 16px 27px;
  border-radius: 36px;
  border-top: 1px solid #01ECFF;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0px 4px 12px 2px rgba(1, 236, 255, 0.4);
  display: flex;
  align-items: center;
  justify-content: space-between; /* 양쪽 끝으로 정렬 */
  box-sizing: border-box;
`;

const ChatInputField = styled.input`
  flex: 1; /* 입력 필드가 가능한 모든 공간을 차지 */
  background: transparent;
  border: none;
  color: #FFFFFF;
  font-size: 16px;
  outline: none;
`;

const SendIcon = styled.img`
  width: 36px;
  height: 36px;
  cursor: pointer;
`;

const ChatInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Chat = () => {
  return (
    <>
      <TitleCon>
        <Title>Route Porter</Title>
        <Detail>필요한 상세조건을 입력하여 더 구체적인 여행 계획을 세울 수 있습니다.</Detail>
      </TitleCon>
      <ChatContainer>
        <ChatCon>
          <ChatImg src={flag} alt="flag" />
          <ChatBox>여행 예산은 어느정도 인가요?</ChatBox>
        </ChatCon>
        <UserChatCon>
          <UserChatBox>80-100만원</UserChatBox>
        </UserChatCon>
      </ChatContainer>
      <ChatInputWrapper>
        <ChatInputContainer>
          <ChatInputField placeholder="메시지를 입력하세요..." />
          <SendIcon src={sendIcon} alt="send" />
        </ChatInputContainer>
      </ChatInputWrapper>
    </>
  );
};

export default Chat;