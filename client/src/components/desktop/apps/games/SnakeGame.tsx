import { useEffect, useRef, useState, useCallback } from "react";

const GRID_SIZE = 20;
const GAME_SPEED = 100;
const DIRECTIONS = {
  UP: { x: 0, y: -1 },
  DOWN: { x: 0, y: 1 },
  LEFT: { x: -1, y: 0 },
  RIGHT: { x: 1, y: 0 },
};

type Position = {
  x: number;
  y: number;
};

type Direction = typeof DIRECTIONS.UP | typeof DIRECTIONS.DOWN | 
                 typeof DIRECTIONS.LEFT | typeof DIRECTIONS.RIGHT;

export const SnakeGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [snake, setSnake] = useState<Position[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Position>({ x: 5, y: 5 });
  const [direction, setDirection] = useState<Direction>(DIRECTIONS.RIGHT);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const generateFood = useCallback((): Position => {
    const x = Math.floor(Math.random() * (GRID_SIZE - 2)) + 1;
    const y = Math.floor(Math.random() * (GRID_SIZE - 2)) + 1;
    return { x, y };
  }, []);

  const resetGame = useCallback(() => {
    setSnake([{ x: 10, y: 10 }]);
    setFood(generateFood());
    setDirection(DIRECTIONS.RIGHT);
    setGameOver(false);
    setScore(0);
    setIsPaused(false);
    setGameStarted(true);
  }, [generateFood]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!gameStarted) {
        if (e.key === "Enter") resetGame();
        return;
      }

      if (e.key === " ") {
        setIsPaused(prev => !prev);
        return;
      }

      if (isPaused) return;

      switch (e.key) {
        case "ArrowUp":
          if (direction !== DIRECTIONS.DOWN) setDirection(DIRECTIONS.UP);
          break;
        case "ArrowDown":
          if (direction !== DIRECTIONS.UP) setDirection(DIRECTIONS.DOWN);
          break;
        case "ArrowLeft":
          if (direction !== DIRECTIONS.RIGHT) setDirection(DIRECTIONS.LEFT);
          break;
        case "ArrowRight":
          if (direction !== DIRECTIONS.LEFT) setDirection(DIRECTIONS.RIGHT);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction, gameStarted, isPaused, resetGame]);

  useEffect(() => {
    if (!gameStarted || gameOver || isPaused) return;

    const moveSnake = () => {
      setSnake(prevSnake => {
        const head = { ...prevSnake[0] };
        head.x += direction.x;
        head.y += direction.y;

        if (
          head.x < 0 || head.x >= GRID_SIZE ||
          head.y < 0 || head.y >= GRID_SIZE ||
          prevSnake.some(segment => segment.x === head.x && segment.y === head.y)
        ) {
          setGameOver(true);
          return prevSnake;
        }

        const newSnake = [head, ...prevSnake];
        
        if (head.x === food.x && head.y === food.y) {
          setScore(prev => prev + 1);
          setFood(generateFood());
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    };

    const gameInterval = setInterval(moveSnake, GAME_SPEED);
    return () => clearInterval(gameInterval);
  }, [direction, food, gameOver, gameStarted, generateFood, isPaused]);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const cellSize = canvas.width / GRID_SIZE;

    ctx.fillStyle = "#4CAF50";
    snake.forEach((segment, index) => {
      if (index === 0) ctx.fillStyle = "#388E3C";
      
      ctx.fillRect(
        segment.x * cellSize,
        segment.y * cellSize,
        cellSize,
        cellSize
      );
      
      if (index === 0) ctx.fillStyle = "#4CAF50";
    });

    ctx.fillStyle = "#F44336";
    ctx.fillRect(
      food.x * cellSize,
      food.y * cellSize,
      cellSize,
      cellSize
    );

    ctx.strokeStyle = "#E0E0E0";
    ctx.lineWidth = 0.5;
    for (let i = 0; i <= GRID_SIZE; i++) {
      ctx.beginPath();
      ctx.moveTo(i * cellSize, 0);
      ctx.lineTo(i * cellSize, canvas.height);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(0, i * cellSize);
      ctx.lineTo(canvas.width, i * cellSize);
      ctx.stroke();
    }

    if (gameOver || !gameStarted) {
      ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = "white";
      ctx.font = "20px monospace";
      ctx.textAlign = "center";
      
      if (gameOver) {
        ctx.fillText("Game Over!", canvas.width / 2, canvas.height / 2 - 30);
        ctx.fillText(`Score: ${score}`, canvas.width / 2, canvas.height / 2);
      } else {
        ctx.fillText("Snake Game", canvas.width / 2, canvas.height / 2 - 30);
      }
      
      ctx.font = "16px monospace";
      ctx.fillText("Press Enter to start", canvas.width / 2, canvas.height / 2 + 30);
    }

    if (isPaused && gameStarted && !gameOver) {
      ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = "white";
      ctx.font = "20px monospace";
      ctx.textAlign = "center";
      ctx.fillText("Paused", canvas.width / 2, canvas.height / 2);
      ctx.font = "16px monospace";
      ctx.fillText("Press Space to resume", canvas.width / 2, canvas.height / 2 + 30);
    }

    if (gameStarted && !gameOver) {
      ctx.fillStyle = "black";
      ctx.font = "16px monospace";
      ctx.textAlign = "left";
      ctx.fillText(`Score: ${score}`, 10, 20);
    }
  }, [snake, food, gameOver, gameStarted, isPaused, score]);

  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center",
      padding: "20px",
      fontFamily: "monospace"
    }}>
      <canvas 
        ref={canvasRef}
        width={400}
        height={400}
        style={{ 
          border: "2px solid #333",
          backgroundColor: "#f0f0f0",
          borderRadius: "4px"
        }}
      />
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <p>Use arrow keys to move</p>
        <p>Space to pause</p>
        {gameOver && (
          <button 
            onClick={resetGame}
            style={{
              padding: "8px 16px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontFamily: "monospace",
              marginTop: "10px"
            }}
          >
            Play Again
          </button>
        )}
      </div>
    </div>
  );
};

export default SnakeGame;