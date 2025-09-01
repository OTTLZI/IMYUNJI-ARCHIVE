@echo off
REM ===========================
REM MOV → MP4 자동 변환 배치
REM FFmpeg가 PATH에 등록되어 있어야 함
REM ===========================

echo ===========================
echo MOV → MP4 변환 시작
echo ===========================

REM 현재 폴더 확인
echo 현재 폴더: %cd%

REM 폴더 내 모든 MOV 파일 처리
set count=0
for %%i in (*.mov) do (
    echo 변환 중: %%i
    ffmpeg -i "%%i" -vcodec h264 -acodec aac "%%~ni.mp4"
    set /a count+=1
)

if %count%==0 (
    echo 현재 폴더에 MOV 파일이 없습니다.
) else (
    echo ===========================
    echo 변환 완료! 총 %count%개 파일 처리됨
    echo ===========================
)

pause
