document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('loadingCanvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Wave parameters
    const wave = {
        x: canvas.width * 0.3, // Start at 30% of screen width
        y: canvas.height / 2,
        width: canvas.width * 0.4, // Wave spans 40% of screen width
        amplitude: 80, // Increased amplitude for higher spike
        frequency: 0.02,
        speed: 0.3,
        progress: 0
    };

    let startTime = Date.now();
    let animationDuration = 1500; // Reduced to 1.5 seconds

    function drawWave(progress) {
        ctx.beginPath();
        ctx.moveTo(wave.x, wave.y);
        
        // Draw the baseline before the spike
        const baselineStart = wave.x + wave.width * 0.4;
        ctx.bezierCurveTo(
            wave.x + wave.width * 0.2, wave.y,
            wave.x + wave.width * 0.3, wave.y,
            baselineStart, wave.y
        );
        
        // Draw the action potential spike if we're past 20% progress (earlier start)
        if (progress > 0.2) {
            // Calculate spike height based on progress with faster initial rise
            const spikeProgress = Math.min((progress - 0.2) / 0.15, 1); // Faster rise
            const spikeHeight = wave.amplitude * spikeProgress;
            
            // Rising phase (smooth curve up)
            const riseX = baselineStart + wave.width * 0.05;
            ctx.bezierCurveTo(
                baselineStart + wave.width * 0.02, wave.y,
                baselineStart + wave.width * 0.03, wave.y - spikeHeight * 0.9,
                riseX, wave.y - spikeHeight
            );
            
            // Falling phase (smooth curve down)
            const fallX = riseX + wave.width * 0.05;
            ctx.bezierCurveTo(
                riseX + wave.width * 0.02, wave.y - spikeHeight * 1.1,
                riseX + wave.width * 0.03, wave.y + spikeHeight * 0.2,
                fallX, wave.y + spikeHeight * 0.2
            );
            
            // Undershoot
            const undershootX = fallX + wave.width * 0.05;
            ctx.bezierCurveTo(
                fallX + wave.width * 0.02, wave.y + spikeHeight * 0.2,
                fallX + wave.width * 0.03, wave.y + spikeHeight * 0.1,
                undershootX, wave.y + spikeHeight * 0.1
            );
            
            // Return to baseline
            ctx.bezierCurveTo(
                undershootX + wave.width * 0.05, wave.y + spikeHeight * 0.1,
                undershootX + wave.width * 0.1, wave.y,
                wave.x + wave.width, wave.y
            );
        } else {
            // Draw the remaining baseline if spike hasn't started
            ctx.bezierCurveTo(
                baselineStart + wave.width * 0.2, wave.y,
                baselineStart + wave.width * 0.4, wave.y,
                wave.x + wave.width, wave.y
            );
        }

        ctx.strokeStyle = '#0066cc';
        ctx.lineWidth = 3;
        ctx.stroke();
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / animationDuration, 1);
        
        // Draw the wave with current progress
        drawWave(progress);
        
        // Continue animation or end
        if (elapsed < animationDuration) {
            requestAnimationFrame(animate);
        } else {
            // Fade out loading screen and show content
            const loadingScreen = document.getElementById('loading-screen');
            const content = document.getElementById('content');
            
            loadingScreen.style.transition = 'opacity 0.5s';
            loadingScreen.style.opacity = '0';
            
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                content.style.display = 'block';
            }, 500);
        }
    }

    // Start animation
    animate();
}); 