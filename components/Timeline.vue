<template>
    <div class="timeline">
        <BaseGlassPanel>
            <section v-for="event in timeline">
                <span>
                    <h2>{{ event.company }}</h2>
                    <p>{{ event.start }} to {{ event.end }}</p>
                </span>

                <h3>{{ event.title }}</h3>
                <p>{{ event.description }}</p>

                <div class="circle"></div>
            </section>
        </BaseGlassPanel>
    </div>
</template>

<script>

export default {
    props: {
        timeline: {
            type: Object,
            required: true
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/core.scss";
$line-width: 1px;
$line-left: 10px;
$circle-radius: 16px;
$circle-top: 38px;
$line-offset: 15px;

.timeline {
    width: 100%;
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
}

section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    position: relative;

    padding: 20px 40px !important;

    span {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .circle {
        width: $circle-radius;
        height: $circle-radius;
        border-radius: 50%;
        background-color: var(--theme-primary);
        position: absolute;
        top: $circle-top;
        left: $line-width + $line-left;
        transform: translate(-50%, -50%);
        z-index: 1;
    }

    &::after {
        content: "";
        display: block;
        width: 0px;

        border: $line-width solid var(--theme-primary);

        position: absolute;
        top: $line-offset;
        left: $line-left;
        bottom: -$line-offset;
    }

    &:last-of-type {
        &::after {
            content: "";
            display: block;
            border: 0;
            width: calc($line-width * 2);
            background: linear-gradient(to bottom, var(--theme-primary), var(--theme-primary) 50%, transparent 90%);

            position: absolute;
            top: $line-offset;
            left: $line-left;
            bottom: -$line-offset;
        }
    }
}

@media (max-width: $mobile) {
    .timeline {
        section {
            span {
                flex-direction: column;
                align-items: flex-start;
            }
        }
    }
}
</style>