import { useDrag, useDrop } from "react-dnd";
import { FC, ReactNode, useRef } from "react";
import { motion } from "framer-motion";

type DraggableComponentProps = {
    id: string;
    index: number;
    moveItem: (fromIndex: number, toIndex: number) => void;
    children: ReactNode;
};

const DraggableComponent: FC<DraggableComponentProps> = ({ id, index, moveItem, children }) => {
    const ref = useRef<HTMLDivElement>(null);

    const [, drop] = useDrop({
        accept: "component-instance",
        hover(item: { id: string; index: number }, monitor) {
            if (!ref.current) return;
            
            const dragIndex = item.index;
            const hoverIndex = index;
            
            if (dragIndex === hoverIndex) return;
            
            const hoverBoundingRect = ref.current.getBoundingClientRect();

            const sensitivityThreshold = 0.1;
            const hoverThresholdX = hoverBoundingRect.width * sensitivityThreshold;
            const clientOffset = monitor.getClientOffset();
            
            if (!clientOffset) return;
            
            const hoverClientX = clientOffset.x - hoverBoundingRect.left;

            if (dragIndex < hoverIndex && hoverClientX < hoverThresholdX) return;
        
            if (dragIndex > hoverIndex && hoverClientX > (hoverBoundingRect.width - hoverThresholdX)) return;
            
            moveItem(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag({
        type: "component-instance",
        item: { id, index },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    drag(drop(ref));

    return (
        <motion.div
            ref={ref}
            layout
            transition={{
                type: "spring",
                stiffness: 600, 
                damping: 25,    
                mass: 0.8,     
            }}
            style={{
                opacity: isDragging ? 0.6 : 1, 
                cursor: "grab",
                height: "100%",
                width: "100%",
                justifyItems: "center",
                position: "relative",
                zIndex: isDragging ? 100 : 1,
            }}
            whileDrag={{
                cursor: "grabbing",
                scale: 1.05,    
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)", 
            }}
        >
            {children}
        </motion.div>
    );
};

export default DraggableComponent;