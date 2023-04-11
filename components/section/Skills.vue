<template>
    <div class="skills">
        <ul class="skills-list">
            <li>Unity</li>
            <li>Unreal</li>
            <li>C#</li>
            <li>C++</li>

            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>SCSS</li>
            <li>Vue</li>
            <li>Docker</li>
            <li>PostgreSQL</li>

            <li>Python</li>
            <li>Rust</li>
        </ul>

        <div class="skills-grid">
            <BaseGlassPanel>
                <h4>2D and 3D game development</h4>
                <p>Experienced in writing C# code for use in game engines (such as s&box and Unity) and as
                    desktop
                    applications</p>
            </BaseGlassPanel>
            <BaseGlassPanel>
                <h4>Desktop application development using C++ and C#</h4>
                <p>Experienced in writing efficient native code for desktop applications</p>
            </BaseGlassPanel>
            <BaseGlassPanel>
                <h4>Server-side development using Node.js</h4>
                <p>Skilled in creating backends for web applications</p>
            </BaseGlassPanel>
            <BaseGlassPanel>
                <h4>Responsive web design using HTML, CSS, and JavaScript</h4>
                <p>Skilled in creating uniquely styled web apps for mobile and desktop platforms</p>
            </BaseGlassPanel>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/core.scss";

.skills {
    .skills-grid {
        display: flex;
        flex-direction: row;
        gap: 20px;
        align-items: stretch;
        justify-content: center;
        width: 100%;
        flex-wrap: wrap;

        .glass-panel {
            flex-grow: 1;
            flex-shrink: 1;
            flex-basis: 40%;
        }
    }

    .skills-list {
        list-style: none;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 0;
        margin-bottom: 50px;

        li {
            flex-basis: 12.5%;
            flex-grow: 1;
            margin: 5px;
            padding: 10px 20px;
            border-radius: 5px;
            text-align: center;

            @include glass-small;
        }
    }
}
</style>