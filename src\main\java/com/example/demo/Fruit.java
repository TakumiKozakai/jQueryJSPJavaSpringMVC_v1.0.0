package com.example.demo;

public class Fruit {

	private String fruit;
	private boolean newFlag;

	/**
	 * コンストラクタ
	 * @param fruit
	 * @param newFlag
	 */
	public Fruit(String fruit, boolean newFlag) {
		this.fruit = fruit;
		this.newFlag = newFlag;
	};

	/**
	 * @return fruit
	 */
	public String getFruit() {
		return fruit;
	}

	/**
	 * @param fruit セットする fruit
	 */
	public void setFruit(String fruit) {
		this.fruit = fruit;
	}

	/**
	 * @return newFlag
	 */
	public boolean isNewFlag() {
		return newFlag;
	}

	/**
	 * @param newFlag セットする newFlag
	 */
	public void setNewFlag(boolean newFlag) {
		this.newFlag = newFlag;
	}

}
