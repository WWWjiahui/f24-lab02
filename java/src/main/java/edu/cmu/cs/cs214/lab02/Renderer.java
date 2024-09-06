package edu.cmu.cs.cs214.lab02;

import edu.cmu.cs.cs214.lab02.shapes.Shape;

public class Renderer {
    private final Shape shape;
    
    Renderer(Shape shape) {
        this.shape = shape;
    }

    public void draw() {
        double area = shape.getArea();

        // assume implementation

        System.out.println("""
                           Shape printed
                           Its area is """ + area);
    }
}
